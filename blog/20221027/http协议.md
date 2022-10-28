===tag=网络
===description=http协议
===pinned=false
===create=2022-10-27

# 概览

> HTTP的范例和概念没有改变。它含有头部(header)和正文(body)，请求(request)和响应(response)，还有动词(verb)和缓存(Cookie)。HTTP/3的主要改变是将这些报文传送到另一端的方式

## http2

HTTP/2 最大的变化是重新定义了格式化和传输数据的方式，这是通过在高层 HTTP API 和低层 TCP 连接之间引入二进制分帧层来实现的。这样带来的好处是原来的 WEB 应用完全不用修改，就能享受到协议升级带来的收益。
1. 二进制协议
2. 多路复用
3. 服务器推送
4. HTTP2允许取消某个正在传输的数据流，而不关闭TCP连接。

HTTP 2.0把解决性能问题的方案内置在了传输层，通过多路复用来减少延迟，通过压缩 HTTP首部降低开销，同时增加请求优先级和服务器端推送的功能。
在 HTTP/2 中，同域名下所有通信都在单个连接上完成，这个连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。

> 连接 -> 流 -> 消息 -> 帧

## https

Curl 请求 HTTPS 网站的时候，需要使用本地的 CA 根 证书来校验网站的身份。
 
不同平台、不同密码学库、不同的应用软件，使用的 CA 根证书是有一定区别的。
 
在 Ubuntu 下，安装 Curl 包的时候会额外安装一个包 ca-certificates，这个包和证书有关，实际上这个包由 OpenSSL 安装的

因为 Curl 是通过 OpenSSL 实现客户端 HTTPS 协议的，也就是说在 Curl/OpenSSL 平台下，Curl 使用的根证书库都是由 ca-certificates 包处理。

> 根证书库 CAfile: /etc/ssl/certs/ca-certificates.crt, 由ca-certificates包处理

`/usr/share/ca-certificates/mozilla/`, 包含很多具体的CA根证书文件，每个CA机构的根证书对应一个文件， /etc/ca-certificates.conf 文件包含了这里这些列表，/etc/ca-certificates.conf 文件对应的所有证书会合并到`/etc/ssl/certs/ca-certificates.crt`

`/usr/sbin/update-ca-certificates`更新证书的命令， 最终会更新 /etc/ssl/certs/ca-certificates.crt 文件

- key是服务器上的私钥文件，用于对发送给客户端数据的加密，以及对从客户端接收到数据的解密
- csr是证书签名请求文件（公钥），用于提交给证书颁发机构（CA）对证书签名
- crt是由证书颁发机构（CA）签名后的证书，或者是开发者自签名的证书，包含证书持有人的信息，持有人的公钥，以及签署者的签名等信息
- keystore 包含证书的文件，可以自己去导入证书
- PEM 文件格式存储证书和密钥，用于导出，导入证书时候的证书的格式，有证书开头，结尾的格式。
- 还有就是X.509是一个标准，规范了公开秘钥认证、证书吊销列表、授权凭证、凭证路径验证算法等

## 握手流程

### RSA

- client-hello：随机数1、支持的加密方法
- server-hello：随机数2、选择的加密方法、证书
- premaster-key：随机数3（由证书中的公钥加密）

后续双方通过交换的3个随机数生成的对称加密密钥进行通讯

在服务端发送证书过来时，客户端会从自己信任的CA仓库中，拿CA的证书里面的公钥去解密网站的证书。如果能够成功，则说明电商网站是可信的。这个过程中，可能会不断往上追溯CA、CA的CA、CA的CA的CA，直到一个授信的CA，就可以了。

### DHE

> DHE临时模式，DH是静态模式，服务端的DH参数和DH公钥是固定保存在证书里的，也不能保证 前向安全性，该方式已经被OpenSSL废弃。

与RSA方式中pre-master完全由客户端生成不同，在DH算法中，pre-master 是客户端和服务器端共同计算出来的，只有经过消息互换才能计算出预备主密钥

- 服务端：（生成DH参数和DH密钥对，用自己的RSA私钥签名DH参数和DH公钥）发送签名值、DH参数、证书（包含DH公钥）
- 客户端：（从证书中获取服务端RSA公钥，验证签名保证是服务端发过来的；通过DH参数生成客户端的DH密钥对）发送客户端DH公钥

客户端通过客户端DH私钥和服务器端DH公钥计算出预备主密钥，服务端通过服务器的DH私钥和客户端公钥计算出预备主密钥。

> 为什么公私钥不一样最后生成一样的预备主密钥，具体生成逻辑属于密码学范畴了

前向安全性指的是，如果有第三方收集了所有通信数据，当时它解不开，但很久之后如果私钥泄漏，能不能回过头来解密这些历史数据。
RSA的方式里，只要知道RSA私钥，就可以直接获取客户端加密传输的 pre-master，进而计算出实际的对称加密密钥，该方法是非前向安全的。
而在DH算法中，RSA密钥对只是用于做数字签名，用于生成pre-master的关键参数 客户端DH私钥和 服务端DH私钥 都没有经过网络传输，即使RSA私钥泄漏也无法解密历史数据，是 前向安全的。

## 自签证书

生成私钥

`openssl genrsa -out server.key`

生成证书签名请求

`openssl req -new -key server.key -out server.csr -subj "/C=CN/ST=Shanghai/L=Shanghai/O=cetc/OU=cetc/CN=192.168.0.107`

- C: 国家
- ST: 省份
- L: 城市
- O: 组织
- OU: 部门
- CN: 域名或者ip

生成证书

`openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt`

## http3

- 使用 UDP 协议，不需要三次连接进行握手，而且也会缩短 TLS 建立连接的时间。
- 解决了队头阻塞问题
- 实现动态可插拔，在应用层实现了拥塞控制算法，可以随时切换。
- 报文头和报文体分别进行认证和加密处理，保障安全性。
- 连接能够平滑迁移

# 报文头

> 参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP

HTTP 消息头允许客户端和服务器通过 request和 response传递附加信息。一个请求头由名称（不区分大小写）后跟一个冒号 (:)，冒号后跟具体的值（不带换行符）组成。该值前面的引导空白会被忽略。

下面按照应用类型进行划分

## 安全

- Content-Security-Policy

CSP 通过指定允许浏览器加载和执行那些资源，使服务器管理者有能力减少或消除 XSS 攻击的可能性。 一个 CSP 兼容的浏览器将会仅执行从白名单域获取得到的脚本文件，忽略所有其他的脚本（包括内联脚本）。（1）Content-Security-Policy 配置好并启用后，不符合 CSP 的外部资源就会被阻止加载。 （2）Content-Security-Policy-Report-Only 表示不执行限制选项，只是记录违反限制的行为。它必须与report-uri选项配合使用。

- Strict-Transport-Security

告诉浏览器该站点只能通过 HTTPS 访问。浏览器应该自动把所有尝试使用HTTP的请求自动替换为HTTPS请求。

- Set-Cookie
- X-Content-Type-Options

响应头相当于一个提示标志，被服务器用户提示浏览器一定要遵循 Content-Type 头中 MIME 类型的设定，而不能对其进行修改。它减少了浏览器可能“猜测”某些内容不正确的意外应用程序行为，例如当开发人员将一个页面标记为“HTML”，但浏览器认为它看起来像JavaScript并试图将其呈现为JavaScript时。这个头将确保浏览器始终按照服务器设置的MIME类型来解析。

`X-Content-Type-Options: nosniff`

- X-Frame-Options

X-Frame-Options 响应头是用来给浏览器指示允许一个页面可否在 , , 或者 中展现的标记。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免点击劫持攻击。

X-Frame-Options:DENY# 表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。X-Frame-Options:SAMEORIGIN# 表示该页面可以在相同域名页面的 frame 中展示。X-Frame-Options:ALLOW-FROMuri# 表示该页面可以在指定来源的 frame 中展示。

- X-XSS-Protection

X-XSS-Protection 响应头是Internet Explorer，Chrome和Safari的一个功能，当检测到跨站脚本攻击 (XSS)时，浏览器将停止加载页面。

`X-XSS-Protection: 1; mode=block # 启用XSS过滤。如果检测到 XSS 攻击，浏览器将不会清除页面，而是阻止页面加载。`

## 访问控制


请求

- Access-Control-Request-Method
- Access-Control-Request-Headers

响应

- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Max-Age
- Access-Control-Allow-Credentials

## 认证

请求

- Authorization
- Proxy-Authorization

响应

- WWW-Authenticate
- Proxy-Authenticate

支持的验证类型

- Basic： Base64
- Bearer：通过 OAuth 2.0
- Digest：md5

## 缓存

> 在某些情况下，可能存在前置组件的部分缓存功能，导致静态文件一直无法加载，这时可以直接在请求路径后添加一个随机参数 例如 ?x=time.Now().Unix, 表示当前的文件需要动态加载，即可解决缓存问题


#强缓存

浏览器不会像服务器发送任何请求，直接从本地缓存中读取文件并返回Status Code: 200 OK

- Expires: 告诉浏览器在约定的这个时间前，可以直接从缓存中获取资源（representations），而无需跑到服务器去获取。Expires因为是对时间设定的，且时间是Greenwich Mean Time （GMT），而不是本地时间，所以对时间要求较高。
- Cache-Control：会覆盖expires，当值设为max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

#协商缓存

向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源

-   Last-Modifed/If-Modified-Since(http1.0字段)：浏览器向服务器发送资源最后的修改时间；当资源过期时（浏览器判断Cache-Control标识的max-age过期），发现响应头具有Last-Modified声明，则再次向服务器请求时带上头if-modified-since，表示请求时间，服务器与服务器中的文件判断是否更改过，没有更改就返回304，更改过就返回200以及新的文件
-   Etag/If-None-Match：Etag是属于HTTP 1.1属性，它是由服务器（Apache或者其他工具）生成返回给前端，用来帮助服务器控制Web端的缓存验证。 Apache中，ETag的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行Hash后得到的。；If-None-Match：当资源过期时，浏览器发现响应头里有Etag,则再次像服务器请求时带上请求头if-none-match(值是Etag的值)。服务器收到请求进行比对，决定返回200或304

## 压缩

请求

- Accept-Encoding：其中包含有它所支持的压缩算法，以及各自的优先级，服务器则从中选择一种，使用该算法对响应的消息主体进行压缩

响应

- Content-Encoding：服务器则从选请求中的Accept-Encoding择一种，使用该算法对响应的消息主体进行压缩，选择了哪一个就从这个响应头告知

## 条件请求

- If-Match
- If-None-Match
- If-Modified-Since
- If-Unmodified-Since
- If-Range

## 内容协商

- Accept-Charset
- Accept
- Accept-Encoding
- Accept-Language
- User-Agent
- Content-Type: application/octet-stream, 浏览器会触发下载行为, 和Content-Disposition
- Content-Disposition: attachment; filename="filename.jpg"


## cookies

请求

- Cookie: yummy_cookie=choco; 

响应

- Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

## 范围请求

请求
- Range: bytes=0-1023

响应

- Accept-Ranges: none

# 状态码

- 100 (继续) 请求者应当继续提出请求。 服务器返回此代码表示已收到请求的第一部分,正在等待其余部分。
- 101 (切换协议) 请求者已要求服务器切换协议,服务器已确认并准备切换。
- 102 由WebDAV(RFC 2518)扩展的状态码,代表处理将被继续执行。
- 200 (成功) 服务器已成功处理了请求。 通常,这表示服务器提供了请求的网页。
- 201 (已创建) 请求成功并且服务器创建了新的资源。
- 202 (已接受) 服务器已接受请求,但尚未处理。
- 203 (非授权信息) 服务器已成功处理了请求,但返回的信息可能来自另一来源。
- 204 (无内容) 服务器成功处理了请求,但没有返回任何内容。
- 205 (重置内容) 服务器成功处理了请求,但没有返回任何内容。
- 206 (部分内容) 服务器成功处理了部分 GET 请求。
- 207 由WebDAV(RFC 2518)扩展的状态码,代表之后的消息体将是一个XML消息,并且可能依照之前子请求数量的不同,包含一系列独立的响应代码。
- 300 (多种选择) 针对请求,服务器可执行多种操作。 服务器可根据请求者 (useragent)选择一项操作,或提供操作列表供请求者选择。
- 301 (永久移动) 请求的网页已永久移动到新位置。 服务器返回此响应(对 GET 或HEAD请求的响应)时,会自动将请求者转到新位置。
- 302 (临时移动) 服务器目前从不同位置的网页响应请求,但请求者应继续使用原有位置来进行以后的请求。
- 303 (查看其他位置) 请求者应当对不同的位置使用单独的 GET 请求来检索响应时,服务器返回此代码。
- 304 (未修改) 自从上次请求后,请求的网页未修改过。 服务器返回此响应时,不会返回网页内容。
- 305 (使用代理) 请求者只能使用代理访问请求的网页。 如果服务器返回此响应,还表示请求者应使用代理。
- 307 (临时重定向) 服务器目前从不同位置的网页响应请求,但请求者应继续使用原有位置来进行以后的请求。
- 400 (错误请求) 服务器不理解请求的语法。
- 401 (未授权) 请求要求身份验证。 对于需要登录的网页,服务器可能返回此响应。
- 402 该状态码是为了将来可能的需求而预留的。
- 403 (禁止) 服务器拒绝请求。
- 404 (未找到) 服务器找不到请求的网页。
- 405 (方法禁用) 禁用请求中指定的方法。
- 406 (不接受) 无法使用请求的内容特性响应请求的网页。
- 407 (需要代理授权) 此状态代码与 401(未授权)类似,但指定请求者应当授权使用代理。
- 408 (请求超时)服务器等候请求时发生超时。
- 409 (冲突) 服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。
- 410 (已删除) 如果请求的资源已永久删除,服务器就会返回此响应。
- 411 (需要有效长度) 服务器不接受不含有效内容长度标头字段的请求。
- 412 (未满足前提条件) 服务器未满足请求者在请求中设置的其中一个前提条件。
- 413 (请求实体过大) 服务器无法处理请求,因为请求实体过大,超出服务器的处理能力。
- 414 (请求的 URI 过长) 请求的 URI(通常为网址)过长,服务器无法处理。这比较少见,通常的情况包括:本应使用POST方法的表单提交变成了GET方法,导致查询字符串(Query String)过长。
- 415 (不支持的媒体类型) 请求的格式不受请求页面的支持。
- 416 (请求范围不符合要求) 如果页面无法提供请求的范围,则服务器会返回此状态代码。
- 417 (未满足期望值) 服务器未满足”期望”请求标头字段的要求。
- 500 (服务器内部错误) 服务器遇到错误,无法完成请求。
- 501 (尚未实施) 服务器不具备完成请求的功能。 例如,服务器无法识别请求方法时可能会返回此代码。
- 502 (错误网关) 服务器作为网关或代理,从上游服务器收到无效响应。
- 503 (服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常,这只是暂时状态。
- 504 (网关超时) 服务器作为网关或代理,但是没有及时从上游服务器收到请求。
- 505 (HTTP 版本不受支持)服务器不支持请求中所用的 HTTP 协议版本。

