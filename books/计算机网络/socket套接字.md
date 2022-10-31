
创建套接字
socket.socket 参数讲解
socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)

family: 地址族，默认是AF_INET, IPV4地址族
type：协议类型，默认是SOCK_STREAM，TCP协议


设置套接字属性
sock.setsockopt(level, optname, value: int)


level指定控制套接字的层次.可以取三种值:
1)SOL_SOCKET:通用套接字选项.
2)IPPROTO_IP:IP选项.
3)IPPROTO_TCP:TCP选项.　

optname指定控制的方式(选项的名称),我们下面详细解释　
optval获得或者是设置套接字选项.根据选项名称的数据类型进行转换　

选项名称　　　　　　　　说明　　　　　　　　　　　　　　　　　　数据类型
========================================================================
　　　　　　　　　　　　SOL_SOCKET
------------------------------------------------------------------------
SO_BROADCAST　　　　　　允许发送广播数据　　　　　　　　　　　　int
SO_DEBUG　　　　　　　　 允许调试　　　　　　　　　　　　　　　　int
SO_DONTROUTE　　　　　　不查找路由　　　　　　　　　　　　　　　int
SO_ERROR　　　　　　　　 获得套接字错误　　　　　　　　　　　　　int
SO_KEEPALIVE　　　　　　保持连接　　　　　　　　　　　　　　　　int
SO_LINGER　　　　　　　 延迟关闭连接　　　　　　　　　　　　　　struct linger
SO_OOBINLINE　　　　　　带外数据放入正常数据流　　　　　　　　　int
SO_RCVBUF　　　　　　　 接收缓冲区大小　　　　　　　　　　　　　int
SO_SNDBUF　　　　　　　 发送缓冲区大小　　　　　　　　　　　　　int
SO_RCVLOWAT　　　　　　 接收缓冲区下限　　　　　　　　　　　　　int
SO_SNDLOWAT　　　　　　 发送缓冲区下限　　　　　　　　　　　　　int
SO_RCVTIMEO　　　　　　 接收超时　　　　　　　　　　　　　　　　struct timeval
SO_SNDTIMEO　　　　　　 发送超时　　　　　　　　　　　　　　　　struct timeval
SO_REUSERADDR　　　　　 允许重用本地地址和端口　　　　　　　　　int
SO_TYPE　　　　　　　　 获得套接字类型　　　　　　　　　　　　　　　int
SO_BSDCOMPAT　　　　　　与BSD系统兼容　　　　　　　　　　　　　 int
========================================================================
　　　　　　　　　　　　IPPROTO_IP
------------------------------------------------------------------------
IP_HDRINCL　　　　　　　在数据包中包含IP首部　　　　　　　　　　int
IP_OPTINOS　　　　　　　IP首部选项　　　　　　　　　　　　　　　int
IP_TOS　　　　　　　　　服务类型
IP_TTL　　　　　　　　　生存时间　　　　　　　　　　　　　　　　int
========================================================================
　　　　　　　　　　　　IPPRO_TCP
------------------------------------------------------------------------
TCP_MAXSEG　　　　　　　TCP最大数据段的大小　　　　　　　　　　 int
TCP_NODELAY　　　　　　 不使用Nagle算法　　　　　　　　　　　　 int
========================================================================
SO_RCVBUF和SO_SNDBUF每个套接口都有一个发送缓冲区和一个接收缓冲区，使用这两个套接口选项可以改变缺省缓冲区大小。
// 接收缓冲区
int nRecvBuf=32*1024;         //设置为32K
setsockopt(s,SOL_SOCKET,SO_RCVBUF,(const char*)&nRecvBuf,sizeof(int));

//发送缓冲区
int nSendBuf=32*1024;//设置为32K
setsockopt(s,SOL_SOCKET,SO_SNDBUF,(const char*)&nSendBuf,sizeof(int));

监听连接

此 scoket 必须绑定到一个地址上并且监听连接。返回值是一个 (conn, address) 对，其中 conn 是一个 新*的套接字对象，用于在此连接上收发数据，*address 是连接的另一端的套接字所绑定的地址。
client, addr = await loop.sock_accept(sock)

client是一个新的套接字，用于收发数据，addr是连接方的地址

