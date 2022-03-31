# go-micro

## 简介

认证：Auth 内置为一等公民。 身份验证和授权通过为每项服务提供身份和证书来实现安全的零信任网络。 这还包括基于规则的访问控制。


动态配置：从任何地方加载和热重载动态配置。 配置接口提供了一种从任何来源（例如 env vars、文件、etcd）加载应用程序级别配置的方法。 您可以合并源，甚至定义回退。


数据存储：一个简单的数据存储接口，用于读取、写入和删除记录。它默认支持内存、文件和CockroachDB。状态和持久性成为原型之外的核心需求，Micro希望将其构建到框架中。


服务发现：自动服务注册和名称解析。 服务发现是微服务开发的核心。 当服务 A 需要与服务 B 通话时，它需要该服务的位置。 默认发现机制是多播 DNS (mdns)，一个 zeroconf 系统。


负载均衡：基于服务发现的客户端负载平衡。 一旦我们获得了任意数量的服务实例的地址，我们现在需要一种方法来决定路由到哪个节点。 我们使用随机散列负载平衡来提供跨服务的均匀分布，并在出现问题时重试不同的节点。


消息编码：基于内容类型的动态消息编码。 客户端和服务器将使用编解码器和内容类型为您无缝编码和解码 Go 类型。 任何种类的消息都可以被编码并从不同的客户端发送。 客户端和服务器默认处理这个。 默认情况下，这包括 protobuf 和 json。


RPC 客户端/服务器：基于 RPC 的请求/响应，支持双向流。 我们为同步通信提供了一个抽象。 对服务提出的请求将被自动解析、负载平衡、拨号和流式传输。


异步消息：PubSub 内置为异步通信和事件驱动架构的一等公民。 事件通知是微服务开发的核心模式。 默认消息系统是 HTTP 事件消息代理。


同步：分布式系统通常以最终一致的方式构建。 对分布式锁定和领导的支持作为同步接口内置。 使用最终一致的数据库或调度时，请使用 Sync 接口。


可插拔接口：Go Micro 为每个分布式系统抽象使用 Go 接口。 因此，这些接口是可插拔的，并允许 Go Micro 与运行时无关。 您可以插入任何底层技术

## 执行流程

主入口文件，在初始化server的时候会执行下文的一些初始工作

service其实包装了service目录下的结构体，设置name、handler等也都是处理service下面的结构体

cmd中包含一些启动命令

``` Golang
if err := s.opts.Cmd.Init(
        cmd.Auth(&s.opts.Auth),
        cmd.Broker(&s.opts.Broker),
        cmd.Registry(&s.opts.Registry),
        cmd.Runtime(&s.opts.Runtime),
        cmd.Transport(&s.opts.Transport),
        cmd.Client(&s.opts.Client),
        cmd.Config(&s.opts.Config),
        cmd.Server(&s.opts.Server),
        cmd.Store(&s.opts.Store),
        cmd.Profile(&s.opts.Profile),
    ); err != nil {
        logger.Fatal(err)
    }

```

执行Run函数

开启profile

执行opts中设置的service的start函数

newOptions定义了初始配置

``` Golang
func newOptions(opts ...Option) Options {
    opt := Options{
        Auth:      auth.DefaultAuth,
        Broker:    broker.DefaultBroker,
        Cache:     cache.DefaultCache,
        Cmd:       cmd.DefaultCmd,
        Config:    config.DefaultConfig,
        Client:    client.DefaultClient,
        Server:    server.DefaultServer,
        Store:     store.DefaultStore,
        Registry:  registry.DefaultRegistry,
        Runtime:   runtime.DefaultRuntime,
        Transport: transport.DefaultTransport,
        Context:   context.Background(),
        Signal:    true,
    }

    for _, o := range opts {
        o(&opt)
    }

    return opt
}

```