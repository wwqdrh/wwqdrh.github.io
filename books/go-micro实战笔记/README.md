# 简介

go-micro的核心功能

- Authentication - 一等公民， 为网络中的服务提供身份认证. 支持配置访问规则
- Dynamic Config - 动态加载和热重启配置. The config interface provides a way to load application level config from any source such as env vars, file, etcd. You can merge the sources and even define fallbacks.
- Data Storage - 一个读取数据的接口. It includes support for memory, file and CockroachDB by default. State and persistence becomes a core requirement beyond prototyping and Micro looks to build that into the framework.
- Service Discovery - 自动的服务注册以及命名服务. The default discovery mechanism is multicast DNS (mdns), a zeroconf system.
- Load Balancing - 客户端服务发现. Once we have the addresses of any number of instances of a service we now need a way to decide which node to route to. 随机hash进行负载，并且当出现问题时自动切换到下一个节点.
- Message Encoding - Dynamic message encoding based on content-type. The client and server will use codecs along with content-type to seamlessly encode and decode Go types for you. Any variety of messages could be encoded and sent from different clients. The client and server handle this by default. This includes protobuf and json by default.
- RPC Client/Server - RPC based request/response with support for bidirectional streaming. We provide an abstraction for synchronous communication. A request made to a service will be automatically resolved, load balanced, dialled and streamed.
- Async Messaging - PubSub is built in as a first class citizen for asynchronous communication and event driven architectures. Event notifications are a core pattern in micro service development. The default messaging system is a HTTP event message broker.
- Event Streaming - PubSub is great for async notifications but for more advanced use cases event streaming is preferred. Offering persistent storage, consuming from offsets and acking. Go Micro includes support for NATS Jetstream and Redis streams.
- Synchronization - Distributed systems are often built in an eventually consistent manner. Support for distributed locking and leadership are built in as a Sync interface. When using an eventually consistent database or scheduling use the Sync interface.
- Pluggable Interfaces - Go Micro makes use of Go interfaces for each distributed system abstraction. Because of this these interfaces are pluggable and allows Go Micro to be runtime agnostic. You can plugin any underlying technology.

# 工具链

## API

将http请求转为micro server的请求

The request http://localhost:8080/helloworld/call will route to the service helloworld and endpoint Helloworld.Call.

## CLI

脚手架工具

> 具体参考: https://github.com/go-micro/cli

```bash
go install github.com/go-micro/cli/cmd/go-micro@v1.1.1

go-micro new service helloworld

cd helloworld
make proto tidy
go-micro run

go-micro call helloworld Helloworld.Call '{"name": "John"}'

# 创建新方法
go-micro new function helloworld

# 创建一个服务并配置有jaeger
go-micro new service --jaeger helloworld

# grpc相关
go-micro new service --grpc helloworld
```

## Plugins

所有依赖的插件

## Dashboard

可视化管理工具

## Generator

proto生成工具

# 示例

> 各个包的示例: https://github.com/go-micro/examples
> 一个复杂系统的示例: https://github.com/go-micro/demo

```go
import "go-micro.dev/v4"

// create a new service
service := micro.NewService(
    micro.Name("helloworld"),
)

// initialise flags
service.Init()

// start the service
service.Run()
```