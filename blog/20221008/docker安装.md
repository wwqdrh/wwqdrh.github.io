===tag=实践
===description=docker环境搭建
===pinned=false
===create=2022-10-08

Ubuntu18

```bash
sudo apt update

sudo apt install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg |sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"


sudo apt update

sudo apt-cache policy docker-ce

sudo apt install docker-ce

sudo systemctl start docker

sudo systemctl enable docker
```



Docker-compose更新

linux查看: https://github.com/docker/compose-switch

macos、windows: 进入desktop界面 general中启用docker-compose v2

容器内无法访问外部网络

1、dns没有配置

```bash
/etc/docker/daemon.json


{ 
    "registry-mirrors": ["https://registry.docker-cn.com"],
    "dns" : [ 
        "114.114.114.114", 
        "8.8.8.8" 
    ]
}
```

然后systemctl restart docker

2、用户组添加

将需要的用户添加到docker用户组里面

```bash
sudo gpasswd -a $USER docker 

# 进入到docker群组
newgrp docker
```

## 全局配置

daemon.json

```json
{ 
    "registry-mirrors": ["https://registry.docker-cn.com"],
    "dns" : [ 
        "114.114.114.114", 
        "8.8.8.8" 
    ],
    // 容器日志的驱动，以及最大大小，避免将机器磁盘空间占满了
    "log-driver":"json-file",
    "log-opts":{
        "max-size" :"50m",
        "max-file":"3"
    }
}
```

### 日志

只有使用了 local 、json-file、journald 日志驱动的容器才可以使用 docker logs 捕获日志，使用其他日志驱动无法使用 docker logs。

### swarm模式

如果出现docker service logs无法捕获日志的情况

> The problem can be here " RPC ERROR" ; Cli cannot communicate with one of the swarm node.
> 
> Try a "docker swarm ca --rotate" on a swarm manager, to regenerate the local certificate and help to encode/decode any stream after a network problem.

`docker swarm ca --rotate`