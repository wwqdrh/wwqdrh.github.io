===tag=实践
===description=harbor仓库搭建
===pinned=false
===create=2022-10-08

# 简介

镜像仓库功能

安装harbor，worker节点安装，双主复制的高可用（下载离线包然后传到各个节点）

```bash
wget https://github.com/goharbor/harbor/releases/download/v2.3.4/harbor-offline-installer-v2.3.4.tgz

scp harbor-offline-installer-v2.3.4.tgz root@192.168.68.112:/
```

为k8s配置镜像仓库地址，docker或者containerd不同容器的配置方式不同

## docker镜像

在docker的配置文件当中添加 insecure-registries 参数

/etc/docker/daemon.json

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://cr.console.aliyun.com/"
  ],
  "insecure-registries": [ "https://registry-1.docker.io" ],
}
```

## containerd镜像

要在 /etc/containerd/config.toml 配置文件中当中添加修改如下配置，修改其中<host>为仓库地址，<port>为端口地址

```toml
[plugins."io.containerd.grpc.v1.cri".registry]
      [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
        [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.110.114:5000"]
          endpoint = ["http://192.168.110.114:5000"]
      [plugins."io.containerd.grpc.v1.cri".registry.configs]
        [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.110.114:5000".tls]
          insecure_skip_verify = true
```

安装harbor

# 安装

> 参考: https://juejin.cn/post/7042313266504138789
> 
> docker-engine、docker-compose、openssl

前提是按照

```bash
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2

yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum install docker-ce docker-ce-cli containerd.io

# 安装指定版本
yum list docker-ce --showduplicates | sort -r  #查看版本
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io #安装指定版本

systemctl start docker

systemctl enable docker

docker login // 验证账号密码以及拉取集群的问题

# 安装docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
```

有时候拉取镜像失败，报x509是地址解析失败的问题，使用nsloop获取到registry-1.docker.io的最新地址，然后将其加入hosts文件中即可

下载harbor以及初始化，设置为开机启动

```bash
wget https://github.com/goharbor/harbor/releases/download/v2.3.5/harbor-offline-installer-v2.3.5.tgz

tar -zxvf har…tgz

cp harbor.yml.tmpl harbor.yml # 修改harbor.yml, 修改主机名，注释https，修改挂载目录

./install.sh

systemctl stop firewalld # 关闭防火墙或者开放80端口外部才能用ip:80访问(这个端口可以在harbor.yml中进行修改)
firewall-cmd --zone=public --add-port=80/tcp --permanent //开放80
firewall-cmd --zone=public --add-port=443/tcp --permanent //开放443
firewall-cmd --reload //重启防火墙
firewall-cmd --list-ports // 当前开放的端口列表
```

设置开机自启动

/lib/systemd/system/harbor.service

```bash
[Unit]
Description=Harbor
After=docker.service systemd-networkd.service systemd-resolved.service
Requires=docker.service
Documentation=http://github.com/vmware/harbor
[Service]
Type=simple
Restart=on-failure
RestartSec=5
ExecStart=/usr/local/bin/docker-compose -f  /usr/local/harbor/docker-compose.yml up
ExecStop=/usr/local/bin/docker-compose -f /usr/local/harbor/docker-compose.yml down
[Install]
WantedBy=multi-user.target
```

# 使用方式

docker pull redis:6 # 拉取镜像

docker tag nginx 192.168.110.10/[项目名称]/nginx:6

docker login 192.168.110.10

docker push 192.168.110.10/[项目名称]/nginx:6

kubectl create secret docker-registry harbor-imagesecret \
--docker-server=192.168.110.101:5000 \
--docker-username=admin \
--docker-password=Harbor12345 \
--docker-email=huiloademail@163.com

创建镜像访问秘钥，secret(docker-registry类型)，这里将名字设置为harbor-imagesecret

直接拉取容器运行

kubectl run --rm -i demo --image=192.168.110.101:5000/kubetool/test-in-cluster:latest --overrides='{ "spec": { "imagePullSecrets": [{"name": "harbor-imagesecret"}] } }'
