===tag=操作系统
===description=shell工具
===pinned=false

# Makefile

= 是最基本的赋值  
:= 是覆盖之前的值  
?= 是如果没有被赋值过就赋予等号后面的值  
+= 是添加等号后面的值

.PHONY避免命令和文件夹下的文件名起冲突

`@` 表示不显示命令本身，而只显示它的结果


`bash -e pipefail`

pipeline中的命令出错了，把这个非零返回值往后传递，作为整行命令的返回值

# Bash

## 全局变量

```bash
第一个参数 : $1，第二个参数 :$2

$? 之前的命令是否运行成功

$! 最近执行命令的 PID

$$ 当前shell的pid

$# 参数个数

$* 以一个字符串形式输出所有传递到脚本的参数

$@ 以 $IFS 为分隔符列出所有传递到脚本中的参数
```

## 数据结构

```bash
echo ${variable:x:y} # 获取字符串变量的一部分 v[x:y]


echo '$PATH' # ' 当我们不希望把变量转换为值的时候使用它。
echo "$PATH" # " 会计算所有变量的值并用值代替。

${#variable} # 获取变量长度

echo ${variable: -5} # 变量的最后5个字符


echo ${variable//pattern/replacement} # 字符串替换


# 计算字符串中的单词个数
string='hello world aaa hhh !'
set ${string}
echo $# # 5
echo $string|tr -d " " # 去除字符串中的空格

# 数值计算
c=$((a+b))

c=`expr $a + $b`

c=`echo "$a+$b"|bc`

# 数组
array=("Hi" "my" "name" "is")
echo ${array[0]}
echo ${array[@]} # 打印数组的所有元素
echo ${!array[@]} # 输出元素的索引
```

## 流程控制

```bash
# for 循环 :
for i in $(ls);do 
echo item:$i
done

#while 循环 :
#!/bin/bash
COUNTER=0
while [ $COUNTER -lt 10 ]; do
echo The counter is $COUNTER
let COUNTER=COUNTER+1
done

#until 循环 :
#!/bin/bash
COUNTER=20
until [ $COUNTER -lt 10 ]; do
echo COUNTER $COUNTER
let COUNTER-=1
done


nohup command & # 后台运行脚本


# 循环0 3 6 9 ...
for i in {0..100..3}; do echo $i; done

for (( i=0; i<=100; i=i+3 )); do echo"Welcome $i times"; done

# 获取用户输入
read -p "Destination backup Server :" desthost
```

判断

```bash
# 是否存在某个文件
if [ -f /var/log/messages ]
then
echo "File exists"
fi

[ $a == $b ] # 用于字符串比较

[[ $string == abc* ]] # 检查字符串是否以字母"abc" 开头

[ $a -eq $b ] # 用于数字比较

[ $a -gt 12 ]
```

## 文本操作

```bash
head -10 file|tail -1 # 获取文本文件的第 10 行


awk'{ if ($1 == "FIND") print$2}' # 如果第一个元素是FIND，获取第二个元素

awk -F: '$3<100' /etc/passwd # 列出 UID 小于 100 的用户 

cat /etc/passwd|wc -l # 计算本地用户数

ls -d ?[ab]* # 列出第二个字母是 a 或 b 的文件

egrep "^ab|^wwq" /etc/passwd|cut -d: -f1 # 列出以 ab 或 wwq 开头的用户名

sed -i '/Root/s/no/yes/' /etc/ssh/sshd_config # 匹配Root这一行，将no替换成yes
```

# 常见例子

## 1、筛选文件中满足条件的行

格式

- 123-123-1234
- (123) 123-1234

`grep -P '^(\d{3}|\(\d{3}\) )\d{3}-\d{4}$'`

## 2、批量修改文件后缀

```bash
for i in *.go; do mv "$i" "${i%.go}.md"; done
```

## 3、下载整个页面

`wget -l 1 -p -np -k http://www.baidu.com`

下载整站

`wget -c -r -nd -np -K -L -p http://www.baidu.com`

## 4、筛选文件

将0字节的删除掉

`find . -type f -size 0 -exec rm -rf {} \;`

## 5、性能分析

查询内存占用情况，从大到小排序

`ps -e -o "%C : %p : %z : %a"|sort -k5 -nr`

查询CPU情况，从大到小排序

`ps -e -o "%C : %p : %z : %a"|sort -nr`

查看CPU的数量

`cat /proc/cpuinfo |grep -c processor`

显示3特权级(进程)的名字

`ls /etc/rc3.d/S* |cut -c 15-`

通过端口获取pid

> 需要注意的是需要进入root权限才能看到全部信息

`ps -ef | grep 8080 | awk '{print $2}'`

`netstat -ntulp | grep 8080`

`lsof -i:8080`

## 6、文件相关

> - z：有gzip属性的; - j：有bz2属性的

压缩归档文件

`tar -zcvf [文件名].tar.gz [文件夹名]`

解压缩归档文件

`tar -zxvf [文件名].tar.gz`

文件传输到远端

`scp [文件名] root@[ip]:[端口]/`

## 7、网络管理

### nmcli

> ! buntu从17.10开始，已放弃在 ​​/etc/network/interfaces​​ 里固定IP的配置，即使配置也不会生效，而是改成netplan方式 ，配置写在 ​​/etc/netplan/01-netcfg.yaml​​ 或者类似名称的yaml文件里

nmcli connect show  # 查看网卡名字，查看网卡连接状态

nmcli c show {网卡名}

nmcli d # 查看网络接口设备列表

nmcli connection modify [设备名称] ipv4.method manual ipv4.addresses "192.168.110.101/24" ipv4.gateway 192.168.110.1

nmcli c up {网卡名} # 启用connection，等同于ifup

nmcli c down   # 停止connection，等同于ifdown

nmcli c delete {网卡名} # 删除connection，等同于ifdown后删除ifcfg配置文件

创建connection，配置静态ip。等同于修改配置文件，BOOTPROTO=static，ipup启动接口。

nmcli c add type ethernet con-name {网络设备名} ifname {网卡名} ipv4.addr 172.16.123.201/24 ipv4.gateway 172.16.123.1 ipv4.method manual

创建connection，配置动态ip。 等同于修改配置文件，BOOTPROTO=dhcp，ipup启动接口

nmcli c add type ethernet con-name {网络设备名} ifname {网卡名} ipv4.method auto

修改ip地址

nmcli c modify {网卡名} ipv4.addr '172.16.123.201/24'

nmcli c up {网卡名}

nmcli c reload # 重载网络配置文件（ifcfg、route），但不生效

nmcli c up {网卡名}

nmcli d reapply {网卡名}

nmcli d connect {网卡名} 

### ip

> 需要安装iproute2

- ip a
- ip a show <网卡>
- ip link ls [up | down]
- ip a add <ip/netmask> dev <网卡>
- ip a del <ip/netmask> dev <网卡>
- ip link set dev <网卡> up
- ip link set dev <网卡> down
- ip link set txqueuelen 10000 dev <网卡>
- ip link set mtu 9000 dev <网卡>
- ip route [add | del] <目的网段> via <下一跳> dev <网卡>
- ip neighbor show
- ip neighbor show dev <网卡>
- ip neighbor show ip/netmask
- ip neighbor add 192.168.0.0/24 lladdr <mac地址> dev <网卡> nud permanent
- ip neighbor add proxy <ip> dev <网卡>

