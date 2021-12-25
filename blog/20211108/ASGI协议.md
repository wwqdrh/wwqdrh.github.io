
# ASGI协议

ASGI协议
asgi协议是用来处理wsgi协议的无法进行长连接的问题，支持websocket协议，支持HTTP2协议，并且约定支持异步事件。
除此之外还要设计一个兼容现有wsgi应用的服务器。
通常最终是因为WSGI的单次调用界面不适合WebSocket等涉及更多的Web协议。 WSGI应用程序是一个单个的同步可调用对象，它接受一个请求并返回一个响应。这不允许长时间的连接，就像使用长轮询HTTP或WebSocket连接一样。 即使我们将此可调用的对象设为异步方法，它仍然只有一条路径来提供请求，因此具有多个传入事件（例如接收WebSocket帧）的协议也不会触发此操作。
# wsgi协议
def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    return ['This is a python application!']


# asgi协议
async def application(scope, receive, send):
    event = await receive()
    ...
    await send({"type": "websocket.send", ...})

scope：其中包含有关传入请求的详细信息
receive：一个使您可以从客户端接收事件的awaitable
send：一个使您可以将事件发送到客户端的awaitable
发送或接收的每个事件都是Python字典，具有预定义的格式。这些事件格式构成了标准的基础，并允许在服务器之间交换应用程序。
这些事件都有各自定义的类型键，可用于推断事件的结构。这是一个示例事件，用于发送可能从接收到的HTTP响应的开始：
# 
{
    "type": "http.response.start",
    "status": 200,
    "headers": [(b"X-Header", b"Amazing Value")],
}

{
    "type": "websocket.send",
    "text": "Hello world!",
}


与WSGI不同，ASGI连接有两个独立的部分： 连接作用域，代表与用户的协议连接，并且一直存在直到连接关闭。 事件，当事件在连接上发生时发送到应用程序。
ASGI包含两个不同的组件： 协议服务器，它终止套接字并将其转换为连接和按连接的事件消息。 驻留在协议服务器中的应用程序每个连接都会实例化一次，并在事件消息发生时对其进行处理。
连接作用域
用户与ASGI应用程序的每个连接都会为该连接创建该应用程序的实例。它的寿命以及创建后收到的信息称为连接范围。 例如，在HTTP下，连接作用域仅持续一个请求，但它包含大多数请求数据（除HTTP请求主体外，因为它是通过事件流进来的）。 但是，在WebSocket下，连接范围的持续时间与套接字连接的时间相同。范围包含诸如WebSocket路径之类的信息，但诸如传入消息之类的详细信息却作为事件传递。 某些协议可能会给您一个连接范围，而连接范围的信息非常有限，因为它们封装了诸如握手之类的内容。每个协议定义必须包含有关其连接范围持续多长时间以及您将在其中获得哪些信息的信息。 初始化并指定连接范围的应用程序无法与客户端进行通信；它们必须等待直到进入事件循环，并且根据协议规范，可能必须等待初始打开消息。
事件
ASGI将协议分解为应用程序必须响应的一系列事件。对于HTTP，这就像两个事件一样简单-http.request和http.disconnect。对于类似WebSocket的东西，它可能更像websocket.connect，websocket.send，websocket.receive，最后是websocket.disconnect。 每个事件都是具有顶级类型键的字典，该键包含消息类型的Unicode字符串。用户可以自由地发明自己的消息类型，并在应用程序实例之间针对高级别事件发送消息-例如，聊天应用程序可以使用mychat.message用户类型发送聊天消息。预计应用程序应该能够处理混合的事件集，其中一些事件来自传入的客户端连接，而另一些事件则来自应用程序的其他部分。 由于这些消息可以通过网络发送，因此它们需要可序列化，因此只允许它们包含以下类型：
Byte strings
Unicode strings
Integers (within the signed 64-bit range)
Floating point numbers (within the IEEE 754 double precision range; no Nan or infinities)
Lists (tuples should be encoded as lists)
Dicts (keys must be Unicode strings)
Booleans
None
应用程序
ASGI应用程序应为单个异步可调用对象
coroutine application(scope, receive, send)

scope：其中包含有关传入请求的详细信息：scope是一个字典，需要有type键，表明当前的请求是什么协议的，asgi键用来描述当前asgi的协议相关的信息，比如asgi[version]用于表明当前asgi协议的版本。
receive：一个使您可以从客户端接收事件的awaitable
send：一个使您可以将事件发送到客户端的awaitable
中间件
中间件是当你将scope传递(副本)给应用程序时可能发生的过程，需要假定传递过去的不是应用程序最终使用的版本
错误处理
如果你捕获到了一个错误比如没有包含的键或者错误的值，那么需要抛出一个异常给应用程序，对于多出来的键就不需要处理了，以适应协议升级的可能。
协程处理
由于服务器采用协程以及应用程序也有可能采用协程，那么我们需要管理应用程序的协程
扩展功能
有时协议服务器可能希望在核心ASGI协议规范之外提供服务器特定的扩展，或者在引入之前尝试对规范进行更改。scope中定义extensions字典
scope = {
    "type": "http",
    "method": "GET",
    ...
    "extensions": {
        "fullflush": {},
    },
}

HTTP协议的消息格式
规范了再ASGI中的HTTP、HTTP/2、Websocket的消息格式
HTTP
HTTP格式涵盖HTTP / 1.0，HTTP / 1.1和HTTP / 2，因为HTTP / 2中的更改大部分在传输级别上。协议服务器应为同一HTTP / 2连接上的不同请求提供不同的作用域，并正确地将响应多路复用回它们进入的相同流中。 HTTP版本在范围中可以作为字符串使用。
连接作用域
HTTP连接具有单一请求连接范围-也就是说，即使基础套接字仍处于打开状态并且正在服务多个请求，您的应用程序也会在请求开始时实例化，并在结束时销毁。 如果您将响应打开以进行长轮询或类似轮询，则作用域将一直保留到从客户端或服务器端关闭响应为止。
{
    type: "http",
    asgi: {
        version: "3.0",
        spec_version: "2.1"
    },
    http_version: "1.0",  // 1.0 1.1 2.0
    method: "GET",
    scheme: "http",
    path: "",
    raw_path: "",
    query_string: "",
    root_path: "",
    headers: "",
    client: "",
    server: ""
}

Request
如果请求是使用Transfer-Encoding：分块发送的，则服务器负责处理此编码。 http.request消息应仅包含每个块的解码内容。

{
    type: "http.request",
    body: b"",
    more_body: False
}


Response start
{
    type: "http.response.start",
    status: 200,
    headers:(iterable[[byte string, byte string]]) // 对应name与value
}

Response Body
{
    type: "http.reponse.body",
    body: b"",
    more_body: False
}

Disconnect
type: "http.diconnect"

Websocket协议消息格式
LifeSpan
定义lifespan的一个过程。
生命周期消息允许应用程序在运行的事件循环的上下文中初始化和关闭。
async def app(scope, receive, send):
    if scope['type'] == 'lifespan':
        while True:
            message = await receive()
            if message['type'] == 'lifespan.startup':
                ... # Do some startup here!
                await send({'type': 'lifespan.startup.complete'})
            elif message['type'] == 'lifespan.shutdown':
                ... # Do some shutdown here!
                await send({'type': 'lifespan.shutdown.complete'})
                return
    else:
        pass # Handle other types


如今http协议的发展
WebSocket
WebSocket 是一个双向通信协议，它在握手阶段采用 HTTP/1.1 协议（暂时不支持 HTTP/2）。
握手过程如下：
首先客户端向服务端发起一个特殊的 HTTP 请求，其消息头如下：
GET /chat HTTP/1.1  // 请求行
Host: server.example.com
Upgrade: websocket  // required
Connection: Upgrade // required
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ== // required
Origin: http://example.com  // 用于防止未认证的跨域脚本使用浏览器 websocket api 与服务端进行通信
Sec-WebSocket-Protocol: chat, superchat  // optional, 子协议协商字段
Sec-WebSocket-Version: 13

如果服务端支持该版本的 WebSocket，会返回 101 响应，响应标头如下：
HTTP/1.1 101 Switching Protocols  // 状态行
Upgrade: websocket   // required
Connection: Upgrade  // required
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo= // required，加密后的 Sec-WebSocket-Key
Sec-WebSocket-Protocol: chat // 表明选择的子协议

握手完成后，接下来的 TCP 数据包就都是 WebSocket 协议的帧了。
可以看到，这里的握手不是 TCP 的握手，而是在 TCP 连接内部，从 HTTP/1.1 upgrade 到 WebSocket 的握手。
WebSocket 提供两种协议：不加密的 ws:// 和 加密的 wss://. 因为是用 HTTP 握手，它和 HTTP 使用同样的端口：ws 是 80（HTTP），wss 是 443（HTTPS）
在 Python 编程中，可使用 websockets 实现的异步 WebSocket 客户端与服务端。此外 aiohttp 也提供了 WebSocket 支持。
Note：如果你搜索 Flask 的 WebScoket 插件，得到的第一个结果很可能是 Flask-SocketIO。但是 Flask-ScoektIO 使用的是它独有的 SocketIO 协议，并不是标准的 WebSocket。只是它刚好提供与 WebSocket 相同的功能而已。
SocketIO 的优势在于只要 Web 端使用了 SocketIO.js，就能支持该协议。而纯 WS 协议，只有较新的浏览器才支持。对于客户端非 Web 的情况，更好的选择可能是使用 Flask-Sockets。
JS API
// WebSocket API
var socket = new WebSocket('ws://websocket.example.com');

// Show a connected message when the WebSocket is opened.
socket.onopen = function(event) {
  console.log('WebSocket is connected.');
};

// Handle messages sent by the server.
socket.onmessage = function(event) {
  var message = event.data;
  console.log(message);
};

// Handle any error that occurs.
socket.onerror = function(error) {
  console.log('WebSocket Error: ' + error);
};

HTTP/2
HTTP/2 于 2015 年标准化，主要目的是优化性能。其特性如下：
二进制协议：HTTP/2 的消息头使用二进制格式，而非文本格式。并且使用专门设计的 HPack 算法压缩。
多路复用（Multiplexing）：就是说 HTTP/1 可以重复使用同一个 TCP 连接，并且连接是多路的，多个请求或响应可以同时传输。
对比之下，HTTP/1.1 的长连接也能复用 TCP 连接，但是只能串行，不能“多路”。
服务器推送：服务端能够直接把资源推送给客户端，当客户端需要这些文件的时候，它已经在客户端了。（该推送对 Web App 是隐藏的，由浏览器处理）
HTTP/2 允许取消某个正在传输的数据流（通过发送 RST_STREAM 帧），而不关闭 TCP 连接。
这正是二进制协议的好处之一，可以定义多种功能的数据帧。
它允许服务端将资源推送到客户端缓存，我们访问淘宝等网站时，经常会发现很多请求的请求头部分会提示“provisional headers are shown”，这通常就是直接从缓存加载了资源，因此请求根本没有被发送。观察 Chrome Network 的 Size 列，这种请求的该字段一般都是 from disk cache 或者 from memroy cache.
Chrome 可以通过如下方式查看请求使用的协议：

2019-02-10: 使用 Chrome 查看，目前主流网站基本都已经部分使用了 HTTP/2，知乎、bilibili、GIthub 使用了 wss 协议，也有很多网站使用了 SSE（格式如 data:image/png;base64,<base64 string>）
而且很多网站都有使用 HTTP/2 + QUIC，该协议的新名称是 HTTP/3，它是基于 UDP 的 HTTP 协议。
SSE
服务端推送事件，是通过 HTTP 长连接进行信息推送的一个功能。
它首先由浏览器向服务端建立一个 HTTP 长连接，然后服务端不断地通过这个长连接将消息推送给浏览器。JS API 如下：
// create SSE connection
var source = new EventSource('/dates');

// 连接建立时，这些 API 和 WebSocket 的很相似
source.onopen = function(event) {
  // handle open event
};

// 收到消息时（它只捕获未命名 event）
source.onmessage = function(event) {
  var data = event.data;  // 发送过来的实际数据（string）
  var origin = event.origin;  // 服务器端URL的域名部分，即协议、域名和端口。
  var lastEventId = event.lastEventId;  // 数据的编号，由服务器端发送。如果没有编号，这个属性为空。
  // handle message
};

source.onerror = function(event) {
  // handle error event
};

具体的实现
在收到客户端的 SSE 请求（HTTP 协议）时，服务端返回的响应首部如下：
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

而 body 部分，SSE 定义了四种信息：
data：数据栏
event：自定义数据类型
id ：数据 id
retry：最大间隔时间，超时则重新连接
body 举例说明：
: 这种格式的消息是注释，会被忽略\n\n
: 通常服务器每隔一段时间就会发送一个注释，防止超时 retry\n\n

: 下面这个是一个单行数据\n\n
data: some text\n\n

: 下面这个是多行数据，在客户端会重组成一个 data\n\n
data: {\n
data: "foo": "bar",\n
data: "baz", 555\n
data: }\n\n

: 这是一个命名 event，只会被事件名与之相同的 listener 捕获\n\n
event: foo\n
data: a foo event\n\n

: 未命名事件，会被 onmessage 捕获\n\n
data: an unnamed event\n\n

event: bar\n
data: a bar event\n\n

: 这个 id 对应 event.lastEventId\n\n
id: msg1\n
data: message\n\n

WebSocket、HTTP/2 与 SSE 的比较#
加密与否：
WebSocket 支持明文通信 ws:// 和加密 wss://，
而 HTTP/2 协议虽然没有规定必须加密，但是主流浏览器都只支持 HTTP/2 over TLS.
SSE 是使用的 HTTP 协议通信，支持 http/https
消息推送：
WebSocket是全双工通道，可以双向通信。而且消息是直接推送给 Web App.
SSE 只能单向串行地从服务端将数据推送给 Web App.
HTTP/2 虽然也支持 Server Push，但是服务器只能主动将资源推送到客户端缓存！并不允许将数据推送到客户端里跑的 Web App 本身。服务器推送只能由浏览器处理，不会在应用程序代码中弹出服务器数据，这意味着应用程序没有 API 来获取这些事件的通知。
为了接近实时地将数据推送给 Web App， HTTP/2 可以结合 SSE（Server-Sent Event）使用。
WebSocket 在需要接近实时双向通信的领域，很有用武之地。而 HTTP/2 + SSE 适合用于展示实时数据。
另外在客户端非浏览器的情况下，使用不加密的 HTTP/2 也是可能的。
requests 查看 HTTP 协议版本号#
可以通过 resp.raw.version 得到响应的 HTTP 版本号：
Copy
>>> import requests
>>> resp = requests.get("https://zhihu.com")      
>>> resp.raw.version
11

但是 requests 默认使用 HTTP/1.1，并且不支持 HTTP/2.（不过这也不是什么大问题，HTTP/2 只是做了性能优化，用 HTTP/1.1 也就是慢一点而已。）