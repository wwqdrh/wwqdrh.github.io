# 如何使用nginx实现灰度部署


## 什么是灰度部署

<br/>

在应用部署中，存在停机部署和不停机部署两种。不停机部署中分为蓝绿与灰度部署，蓝绿是非黑即白，蓝色为当前版本的实时流量，绿色是最新版本的环境，任何时候只有一套环境有实时流量。在这套环境里做最终的测试，只有当确认新版本完全没有问题之后，才会将流量切到新版本的代码环境中。

灰度部署是将流量逐渐迁移到最新的代码中，1%、5%、10%、25%，在确认代码能够正常运行时再不断扩大。主旨就是用很少的流量验证某个版本是否正常。（金丝雀部署同理，不断试错，如果没有问题就加大流量，如果有问题可以及时告警，同时只是很少的流量会经过这里，即用最小的成本进行试错了）

<br/>

## 实现灰度部署需要考虑的点

<br/>

1. 什么样的流量让其进入新版本(带权值的负载均衡、带特定标识的header、jwt解析后属于特定用户的流量)
2. 当接口错误时如何进行警告，通知开发人员进行修复，并自动降低进入新版本流量的权值
3. 当新流量权值变为100或者0时对应用自动进行切换，执行完全的回退或者推进

<br/>

## 最小实践

<br/>

针对上文指出需要注意的点，这里列出样例(只是提供一种思路，每一个步骤其实都可以自定义，自己控制流量何时伸展，何时收缩)

1. 如何定义路由: 部署新容器时，自动修改nginx的配置，配置权重，每隔一段时间进行检查没有异常则不断扩大权重直至完全切换
2. 如何定义接口产生异常: 修改nginx配置，每次检查时直接进行简单计数，新版本地址与发生500异常，如果大于0了直接进行版本回退

<br/>

```sh
#!/bin/sh

# TODO 需要解析log日志判断是否需要动态伸缩容量

# 当前进程的pid 用于停止旧命令
C_PID=$$
C_DIR=$(
    cd $(dirname $0)
    pwd
)
# flag文件目录 判断当前是否已经有脚本在执行了
C_FLAG=$C_DIR"/.deployed"
C_INGRESS_CONF="/etc/nginx/conf.d/ingres.conf" # nginx配置文件写入路径
C_LOG_PATH=$C_DIR"/access.log"

# 初始值
checktime=10
weight1=90
weight2=10
step=10 # 步数

function weight_factory() {
    wei=$1
    if [ $wei == 0 ]; then
        echo "down"
    else
        echo "weight=$wei"
    fi
}

function usage_factory() {
    echo "$(
        cat <<-EOF
Usage:
    deploy: 执行部署
EOF
    )"
}

function ingress_ori_factory() {
    echo "$(
        cat <<-EOF
upstream nginx_gray_test {
    server 127.0.0.1:8004 weight=100 fail_timeout=30;
    server 127.0.0.1:8005 down fail_timeout=30;
}

server {
    listen       8080;
    server_name  192.168.110.114;

    location / {
        proxy_set_header Host nginx_gray_test;
        proxy_http_version 1.1;
        proxy_pass http://nginx_gray_test;
    }
}
EOF
    )"
}

function ingress_factory() {
    echo "$(
        cat <<-EOF
log_format  debug '\$upstream_addr|\$status|\$upstream_response_time';

upstream nginx_gray_test {
    server 127.0.0.1:8004 $(weight_factory $weight1) fail_timeout=30;
    server 127.0.0.1:8005 $(weight_factory $weight2) fail_timeout=30;
}

server {
    listen       8080;
    server_name  192.168.110.114;

    # 指定access_log的存放路径、格式和缓存大小
    access_log  $C_LOG_PATH debug;

    location / {
        proxy_set_header Host nginx_gray_test;
        proxy_http_version 1.1;
        proxy_pass http://nginx_gray_test;
    }
}
EOF
    )"
}

function deploy1_factory() {
    echo "$(
        cat <<-EOF
docker pull 192.168.110.114:5000/library/deployecho:latest
docker rm -fv deployecho1
docker run -d --name=deployecho1 --restart=always \
    -p 127.0.0.1:8004:8080 \
    192.168.110.114:5000/library/deployecho:latest
EOF
    )"
}

function deploy1_exist() {
    echo "$(
        cat <<-EOF
docker ps | grep deployecho1
EOF
    )"
}

function deploy1_remove() {
    echo "$(
        cat <<-EOF
docker stop deployecho1
docker rm -fv deployecho1
EOF
    )"
}

function deploy2_factory() {
    echo "$(
        cat <<-EOF
docker pull 192.168.110.114:5000/library/deployecho:latest
docker rm -fv deployecho2
docker run -d --name=deployecho2 --restart=always \
    -p 127.0.0.1:8005:8080 \
    192.168.110.114:5000/library/deployecho:latest
EOF
    )"
}

function deploy2_exist() {
    echo "$(
        cat <<-EOF
docker ps | grep deployecho2
EOF
    )"
}

function deploy2_remove() {
    echo "$(
        cat <<-EOF
docker rm -fv deployecho2
EOF
    )"
}

# 多行字符串，按照换行进行分割后执行
# TODO 无法实现多行字符串按照换行符分割
# 写入临时变量后执行
# 示例
# function deploe() {
#     echo "$(
#         cat <<-EOF
# echo 1
# echo 2
# EOF
#     )"
# }
# res=$(run_str_shell "$(deploe)")
# echo "$res"
function run_str_shell() {
    # fun_str="$1"
    # array=(${fun_str//\n/ })
    # for var in ${array[@]}; do
    #     echo $var
    # done
    echo "$1" >>$C_DIR"/tmp.sh"
    chmod +x $C_DIR"/tmp.sh"
    sh -x $C_DIR"/tmp.sh"
    status=$? # 获取上一步执行完成的状态码
    rm -f $C_DIR"/tmp.sh"
    # echo "status: $status"
}

# 入口函数
# 需要检查当前脚本只能同时有一个在运行
# 1、gray 手动设置新旧节点的阈值
# 2、deploy 执行部署
# (1、只要新节点不出错立马切换
# (2、固定运行一段时间，时间越长，新节点错误日志越少，阈值调得越大
function main() {
    # 需要注意的是如果执行kill -9 ，这个信号(强制终止)是不能被处理或忽略的，所以最好是使用15(简单终止)
    # 如果手动退出 将镜像回退
    trap "rm -f $C_FLAG; exit" 0 1 2 3 8 9 14 15

    case $1 in
    "deploy")
        check_single
        echo "" >$C_LOG_PATH
        trap "rollback; rm -f $C_FLAG $C_LOG_PATH; exit" 0 1 2 3 8 9 14 15
        commond_deploy $2 $3
        ;;
    "set")
        commond_set
        ;;
    "-h")
        echo "$(usage_factory)"
        ;;
    *)
        echo "error"
        exit 1
        ;;
    esac
    exit 0
}

# 1、部署镜像启动新的应用实例
# 2、修改nginx的策略 并不断查看当前新应用的状态并动态修改权重
# 网关配置，
# 1、每隔一段时间检查，如果新节点依然存在，将流量转到新节点的阈值调大
# 2、每隔一段时间检查，如果新节点已经退出，将流量阈值设为0 流量回退到新节点
# 根据上面的nginx配置，判断新节点的端口占用是否导致了50x过多，当超过阈值就将其回退，当没有问题就随着时间不断扩大阈值
#
# 现有问题:
# 1、如何判断当前应用的健康状态？简单的凭借应用是否存在并不妥当，还需要判断各个接口的流量情况，
#   也就是说需要专门的判断各个接口的运行状态
# 2、是否需要提供手动设置权重的接口
# 3、如果多次发布以谁为准(直接更新替换新节点，因为旧节点是100%没有问题的)
function commond_deploy() {
    # @args
    # 循环，不断获取应用的状态更新状态
    run_str_shell "$(deploy2_factory)"
    update_nginx # 初始状态

    for ((i = 1; ; i++)); do
        sleep $checktime # 正式环境设为3m
        status=$(check_status)
        # 检测当前状态是否正常，正常的话就进行扩充流量
        if [ $status == 0 ]; then
            grayupdate
        elif [ $status == 1 ]; then
            rollback
            break
        elif [ $status == 2 ]; then
            switch
            break
        fi
    done
    echo "do here"
    echo 0
}

# 手动修改nginx的weight配置
function commond_set() {
    echo 0
}

# 保证只有一个脚本实例在执行
function check_single() {
    if [ -s $C_FLAG ]; then # 存在文件且非空
        old_pid=$(cat $C_FLAG)
        kill -9 $old_pid
    fi

    echo $C_PID >$C_FLAG
}

# 判断当前的流量状况 0正常扩容 1新环境错误进行回退 2新环境无问题直接切换
function check_status() {
    res=$(run_str_shell "$(deploy2_exist)")
    if [ -z "$res" ]; then
        echo 1
    elif [ $(error_strategy) == 1 ]; then
        echo 1
    elif [ $weight2 == 100 ]; then
        echo 2
    else
        echo 0
    fi
}

# 判断新节点出错的依据
function error_strategy() {
    cnt=$(grep "^127.0.0.1:8005|500" -c $C_LOG_PATH)
    if [ $cnt -gt 0 ]; then
        echo 1
    else
        echo 0
    fi
}

# 更新nginx配置
function update_nginx() {
    echo "$(ingress_factory)" >$C_INGRESS_CONF
    nginx -s reload
}

# 回退nginx配置
function single_nginx() {
    echo "$(ingress_ori_factory)" >$C_INGRESS_CONF
    nginx -s reload
}

# 灰度更新 渐渐扩大流量
function grayupdate() {
    weight1=$((weight1 - step))
    weight2=$((weight2 + step))
    update_nginx
}

# 将流量添加到新的节点中
# 1、根据新镜像创建容器1
# 2、weight1为100 weight2为0
# 3、删除新节点的容器
function switch() {
    res=$(run_str_shell "$(deploy1_factory)")
    single_nginx
    res=$(run_str_shell "$(deploy2_remove)")
}

# 回退流量到原来的版本
# 1、将weight1全部为100 weight2为0
# 2、删除新节点的容器
function rollback() {
    single_nginx
    res=$(run_str_shell "$(deploy2_remove)")
}

main $@

```
