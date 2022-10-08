===tag=实践
===description=docker环境搭建
===pinned=false

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
"dns" : [ 
"114.114.114.114", 
"8.8.8.8" 
]
}
```

然后systemctl restart docker
