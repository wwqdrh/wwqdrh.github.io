#!/bin/bash

echo "the code server recommend the path of host and guest is equal, the default is /project, so will create the folder"
mkdir -p ~/project

echo "input the code server image"
read image && docker pull "$image"
if [ $? -ne 0 ]; then
    echo "容器拉取失败"
    exit 1
fi

echo "input the base network name"
read network
docker network inspect "$network"
if [ $? -ne 0 ]; then
	docker network create "$network" --driver overlay
	if [ $? -ne 0 ]; then
		echo "网络创建失败"
		exit 1
	fi
fi

docker secret inspect CODE_SERVER_PWD
if [ $? -ne 0 ]; then
	echo "you should input the admin password"
	read password
	echo $password | docker secret create CODE_SERVER_PWD -
	if [ $? -ne 0 ]; then
		echo "创建密码失败"
		exit 1
	fi
fi

echo "you should input github name..."
read github_name

echo "you should input github email..."
read github_email


docker secret inspect GITHUB_TOKEN
if [ $? -ne 0 ]; then
	echo "you should input github token..."
	read token
	echo $token | docker secret create GITHUB_TOKEN -
	if [ $? -ne 0 ]; then
		echo "github token创建失败"
		exit 1
	fi
fi

userhome=`cd ~; pwd`/project

docker service create --name code-server \
	-p 8080-8090:8080-8090 \
	-e USERHOME="$userhome" \
	-e GITHUB_NAME="$github_name" \
    -e GITHUB_EMAIL="$github_email" \
    --secret source=CODE_SERVER_PWD,target=CODE_SERVER_PWD,mode=0444 \
    --secret source=GITHUB_TOKEN,target=GITHUB_TOKEN,mode=0444 \
    --replicas 1 \
    --network dev \
    --mount type=volume,src="codeserver_config",dst="/root/.config" \
    --mount type=volume,src="codeserver_data",dst="/root/.local" \
    --mount type=bind,src="$userhome",dst="$userhome" \
    --mount type=bind,src="/var/run/docker.sock",dst="/var/run/docker.sock" \
    "$image"

if [ $? -ne 0 ]; then
    echo "code server 启动失败"
    exit 1
fi

imageid=`docker ps | grep code-server | awk '{print $1}'`
if [ $? -ne 0 ]; then
    echo "获取code-server imageid 失败"
    exit 1
fi

docker cp "$imageid":/data/certs/rootCA.pem .
if [ $? -ne 0 ]; then
    echo "拷贝rootCA证书失败"
    exit 1
fi
echo "请手动安装当前目录下的证书，这样浏览器才不会报该https协议不安全"

echo "请手动添加hosts 127.0.0.1 code-server >> /etc/hosts"
# echo "127.0.0.1 code-server" >> /etc/hosts

echo "初始化完成"