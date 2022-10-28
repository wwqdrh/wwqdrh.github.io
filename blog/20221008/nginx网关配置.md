===tag=实践
===description=nginx网关的常用配置
===pinned=false
===create=2022-10-08


## 配置静态文件服务

```bash
apt-get install nginx

systemctl start nginx

systemctl enable nginx
```

配置静态文件映射

-   /usr/sbin/nginx：主程序
-   /etc/nginx：存放配置文件
-   /usr/share/nginx：存放静态文件
-   /var/log/nginx：存放日志

程序启动之后默认的文件路径在`/var/www/html`下面，所以把需要映射的文件直接放在这就行

如果要设置文件过期时间

```bash
expires 30s;
expires 30m;
expires 2h;
expires 30d;
```

## 配置basic auth

```bash
sh -c "echo -n 'wwqdrh:' >> /etc/nginx/.htpasswd"

sh -c "openssl passwd -apr1 >> /etc/nginx/.htpasswd"

# 查看结果
cat /etc/nginx/.htpasswd
```

选择要授权的配置文件中，例如`/etc/nginx/sites-enabled/default`

```
auth_basic "Restricted Content";

auth_basic_user_file /etc/nginx/.htpasswd;
```

## 配置https

使用`nginx -V`查看是否有`http_ssl_module`模块(一般安装都会有)

启用 SSL Session 缓存可以大大减少 TLS 的反复验证，减少 TLS 握手的 roundtrip。  
虽然 session 缓存会占用一定内存，但是用 1M 的内存就可以缓存 4000 个连接，可以说是非常非常划算的。(但是设置最好设置50m，1m太小了东西都加载不出来)


```conf
listen 443 ssl default_server;

listen [::]:443 ssl default_server;

ssl_certificate /opt/certs/zerossl-certs/certificate.crt;

ssl_certificate_key /opt/certs/zerossl-certs//private.key;

# ssl_session_cache为off或者none 这两种情况下 是不会启用ssl的session缓存功能的 
ssl_session_cache  shared:SSL:50m;

ssl_session_timeout  5m;

# 配置支持哪些加密方式，可以通过openssl查看`openssl -v`列出所有详细套件
ssl_ciphers  HIGH:!aNULL:!MD5;

# 设置协商加密算法时，优先使用我们服务端的加密套件，而不是客户端浏览器的加密套件
ssl_prefer_server_ciphers  on;
```

想将http的流量重定向到https上，但是由于没有域名，只有ip，但是在nginx上不管使用`$host`还是`$server_name`都过不来，都只能是内网的ip，所以这个ip只能写死了

```conf
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name _;

        # rewrite ^(.*) https://$server_name$1 permanent;
        return 301 https://43.142.26.74$request_uri;
}
```

## 配置限流与后端转发

ngx_http_limit_req_module模块通过漏桶原理来限制单位时间内的请求数，一旦单位时间内请求数超过限制，就会返回503错误

```conf
limit_req_zone $binary_remote_addr zone=selfcardreq:10m rate=100r/s; # 触发条件，所有访问ip 限制每秒10个请求
limit_conn_zone $binary_remote_addr zone=selfcardconn:10m; # 触发条件

server {
  listen 8000;
  server_name ~^(?<user>.+)\.selfcard\.com$;
  
  location / {
    limit_req zone=selfcardreq burst=5 nodelay;   # 执行的动作,通过zone名字对应
    limit_conn selfcardconn 100;    # 限制同一时间内1个连接，超出的连接返回503

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header User $user;
    proxy_hide_header X-Application-Context;

    set $is_matched 0;
    if ($user != "") {
        set $is_matched 1;
        proxy_pass http://0.0.0.0:3000;
    }

    # 没有匹配到，跳转到默认页面
    if ($is_matched = 0) {
        return 301 http://www.selfcard.com:8000;
    }
  }
}
```