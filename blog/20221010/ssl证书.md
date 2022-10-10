 ===tag=网络
===description=ssl证书
===pinned=false
 
 Curl 请求 HTTPS 网站的时候，需要使用本地的 CA 根 证书来校验网站的身份。
 
 不同平台、不同密码学库、不同的应用软件，使用的 CA 根证书是有一定区别的。
 
在 Ubuntu 下，安装 Curl 包的时候会额外安装一个包 ca-certificates，这个包和证书有关，实际上这个包由 OpenSSL 安装的

因为 Curl 是通过 OpenSSL 实现客户端 HTTPS 协议的，也就是说在 Curl/OpenSSL 平台下，Curl 使用的根证书库都是由 ca-certificates 包处理。

> 根证书库 CAfile: /etc/ssl/certs/ca-certificates.crt, 由ca-certificates包处理

`/usr/share/ca-certificates/mozilla/`, 包含很多具体的CA根证书文件，每个CA机构的根证书对应一个文件， /etc/ca-certificates.conf 文件包含了这里这些列表，/etc/ca-certificates.conf 文件对应的所有证书会合并到`/etc/ssl/certs/ca-certificates.crt`

`/usr/sbin/update-ca-certificates`更新证书的命令， 最终会更新 /etc/ssl/certs/ca-certificates.crt 文件