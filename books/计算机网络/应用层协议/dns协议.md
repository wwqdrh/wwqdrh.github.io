===tag=网络
===description=dns工作流程
===pinned=false
===create=2022-10-26

# dns请求流程

DNS 服务器有 3 种类型：根 DNS 服务器、顶级域（Top-Level Domain, TLD）DNS 服务器和权威 DNS 服务器。

> www.baidu.com 的完整写法是 www.baidu.com.，最后的这个 . 就是根域名。

dns的查询过程本质就是一个从根到叶不断去问谁知道这个域名对应的ip是多少，如果要实现自己的dns服务器，就需要满足相应的报文格式

# dns协议

## 响应格式

### Header 报文头

- 客户端请求ID是为了保证收到DNS服务器返回报文时能正确知道是哪一个请求的响应报文。所以一个完整的DNS请求和响应，里面request和response的ID必须保持一致。
- header.qr = 1，表示响应报文
- header.ancount,这个牵涉到应答记录条目，所以要根据应答字段Answer计算。

### Question 查询的问题

将请求数据原样返回

- qname
- qtype
- qclass

### Answer 应答

- answer.name = request.question.qname;
- answer.type = 1;
- answer.class = 1;
- answer.ttl = ttl || 1;//报文有效跳数
- answer.rdlength = 4;
- answer.rdata = rdata;//数据记录 4字节 ip地址

### uthority 授权应答

自己处理的请求没有授权应答和附加数据。

### Additional 附加信息

自己处理的请求没有授权应答和附加数据。

