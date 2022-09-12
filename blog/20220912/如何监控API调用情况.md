===tag=架构
===description=如何监控API的调用情况
===pinned=false

prometheus + http中间件的实现方式

这里以golang语言为例，Prometheus提供了golang的客户端，简化了代码，主要就是定义好各类数据源类型

然后在中间件中计算并用sdk的方法记录下来，便于Prometheus抓取

也可以搭建pushgateway服务，自己主动上报(这是用来处理Prometheus无法抓取到内网服务)

> 具体例子参考: https://github.com/wwqdrh/logger/tree/main/plugins/prometheusx
