===tag=实践
===description=namespace-网络配置实践
===pinned=false
===create=2022-10-31

# 容器到宿主

对于容器从自己的 Network Namespace 连接到 Host Network Namespace 的方法，一般来说就只有两类设备接口：一类是veth，另外一类是 macvlan/ipvlan。

> 使用centos是因为centos预装了iproute2，可以使用ip命令

```bash
docker run -d --name net-test --network none centos:latest sleep 36000

docker exec -it net-test ip addr
```

就在这个容器的 Network Namespace 里建立 veth

通过 "/proc/$pid/ns/net"这个文件得到 Network Namespace 的 ID，这个 Network Namespace ID 既是这个进程的，也同时属于这个容器。

在"/var/run/netns/"的目录下建立一个符号链接，指向这个容器的 Network Namespace。完成这步操作之后，在后面的"ip netns"操作里，就可以用 pid 的值作为这个容器的 Network Namesapce 的标识了。

```bash
pid=$(ps -ef | grep "sleep 36000" | grep -v grep | awk '{print $2}')
echo $pid
ln -s /proc/$pid/ns/net /var/run/netns/$pid
```

创建veth虚拟设备，并把其分别放在宿主和容器的命名空间

veth pair设备都有一个ifindex和iflink值，，容器中的eth0设备的ifindex值跟host network namespace中的对应veth pair设备的iflink值相等，反之亦然

```bash
# Create a pair of veth interfaces
ip link add name veth_host type veth peer name veth_container
# Put one of them in the new net ns
ip link set veth_container netns $pid

# 在次查看容器中的设备会发现已经加入了一个veth
63: veth_container@if64: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 82:b9:bd:06:99:6b brd ff:ff:ff:ff:ff:ff link-netnsid 0
```

查看docker0所在的网段进行配置，例如

```bash
4: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:ab:ee:1c:db brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
```

```bash
# In the container, setup veth_container
ip netns exec $pid ip link set veth_container name eth0
ip netns exec $pid ip addr add 172.17.1.2/16 dev eth0
ip netns exec $pid ip link set eth0 up
ip netns exec $pid ip route add default via 172.17.0.1

# In the host, set veth_host up
ip link set veth_host up
```

# 宿主到eth0

一个普通 Linux 节点上数据包转发的问题，可以用 nat 来做个转发，或者建立 Overlay 网络发送，也可以通过配置 proxy arp 加路由的方法来实现。

Docker 缺省使用的是 bridge + nat 的转发方式

Docker 程序在节点上安装完之后，就会自动建立了一个 docker0 的 bridge interface。所以我们只需要把第一步中建立的 veth_host 这个设备，接入到 docker0 这个 bridge 上。

```bash
ip link set veth_host master docker0
```

要让子网通过宿主机上 eth0 去访问外网的话，加上iptables规则

```bash
iptables -P FORWARD ACCEPT
```

由于涉及到docker0到主机eth0之间的转发，所以需要配置ipv4运行转发的选项

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

接下来就能ping通了

```bash
docker exec -it net-test ip addr

docker exec -it net-test ping www.baidu.com
```

清理操作

```bash
docker stop net-test && docker rm net-test

rm /var/run/netns/$pid

# ip link delete veth_host, 删除其中一端，另外一端同样会删除，上面直接删除容器，那么这宿主机上的也是会删除的
```