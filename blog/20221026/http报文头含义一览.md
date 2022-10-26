===tag=网络
===description=http协议报文头一览
===pinned=false

> 参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP

HTTP 消息头允许客户端和服务器通过 request和 response传递附加信息。一个请求头由名称（不区分大小写）后跟一个冒号 (:)，冒号后跟具体的值（不带换行符）组成。该值前面的引导空白会被忽略。

下面按照应用类型进行划分

## 安全

- Content-Security-Policy
- Strict-Transport-Security
- Set-Cookie
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

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
