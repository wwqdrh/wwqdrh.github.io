===tag=网络
===description=http缓存机制
===pinned=false

**缓存控制机制**

> 善用缓存，减少服务器网络带宽消耗
> 
> 在某些情况下，可能存在前置组件的部分缓存功能，导致静态文件一直无法加载，这时可以直接在请求路径后添加一个随机参数 例如 ?x=time.Now().Unix, 表示当前的文件需要动态加载，即可解决缓存问题

![[Pasted image 20220521204452.png]]

#强缓存

浏览器不会像服务器发送任何请求，直接从本地缓存中读取文件并返回Status Code: 200 OK

- Expires: 告诉浏览器在约定的这个时间前，可以直接从缓存中获取资源（representations），而无需跑到服务器去获取。Expires因为是对时间设定的，且时间是Greenwich Mean Time （GMT），而不是本地时间，所以对时间要求较高。
- Cache-Control：会覆盖expires，当值设为max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

#协商缓存

向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源

-   Last-Modifed/If-Modified-Since(http1.0字段)：浏览器向服务器发送资源最后的修改时间；当资源过期时（浏览器判断Cache-Control标识的max-age过期），发现响应头具有Last-Modified声明，则再次向服务器请求时带上头if-modified-since，表示请求时间，服务器与服务器中的文件判断是否更改过，没有更改就返回304，更改过就返回200以及新的文件
-   Etag/If-None-Match：Etag是属于HTTP 1.1属性，它是由服务器（Apache或者其他工具）生成返回给前端，用来帮助服务器控制Web端的缓存验证。 Apache中，ETag的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行Hash后得到的。；If-None-Match：当资源过期时，浏览器发现响应头里有Etag,则再次像服务器请求时带上请求头if-none-match(值是Etag的值)。服务器收到请求进行比对，决定返回200或304