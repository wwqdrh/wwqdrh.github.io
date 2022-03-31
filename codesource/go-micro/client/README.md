客户端工具函数


在使用NewRequest的时候，默认是使用的DefaultClient(是rpcClient结构体)


``` Golang
var c client.Client

// ...

req := c.NewRequest(
    name,
    "Debug.Health",
    new(proto.HealthRequest),
)

rsp := new(proto.HealthResponse)

err := c.Call(context.TODO(), req, rsp)
if err != nil {
    return err
}

if rsp.Status != "ok" {
    return errors.New("service response: " + rsp.Status)
}

return nil


// 接口定义
type Client interface {
    Init(...Option) error
    Options() Options
    NewMessage(topic string, msg interface{}, opts ...MessageOption) Message
    NewRequest(service, endpoint string, req interface{}, reqOpts ...RequestOption) Request
    Call(ctx context.Context, req Request, rsp interface{}, opts ...CallOption) error
    Stream(ctx context.Context, req Request, opts ...CallOption) (Stream, error)
    Publish(ctx context.Context, msg Message, opts ...PublishOption) error
    String() string
}
```