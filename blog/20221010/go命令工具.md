===tag=编程语言
===description=golang命令工具
===pinned=false

> 参考: https://hyper0x.github.io/go_command_tutorial/#/0.1

# 内置工具
## env

通用环境变量

| 名称 | 说明 |
| --- | --- |
| CGO_ENABLED | 指明cgo工具是否可用的标识。|
| GOARCH |程序构建环境的目标计算架构。|
| GOBIN | 存放可执行文件的目录的绝对路径。|
| GOCHAR | 程序构建环境的目标计算架构的单字符标识。|
| GOEXE | 可执行文件的后缀。|
| GOHOSTARCH | 程序运行环境的目标计算架构。|
| GOOS | 程序构建环境的目标操作系统。|
| GOHOSTOS | 程序运行环境的目标操作系统。|
| GOPATH | 工作区目录的绝对路径。|
| GORACE | 用于数据竞争检测的相关选项。|
| GOROOT | Go语言的安装目录的绝对路径。|
| GOTOOLDIR | Go工具目录的绝对路径。|
| GODEBUG | 调试相关 |
| GOPROXY | 拉取代码相关 |
| GOINSECURE | 拉取代码相关，私有仓库，允许http |
| GONOPROXY | 拉取代码相关，私有仓库，不使用代理 |
| GONOSUMDB |拉取代码相关，私有仓库, 不做sumdb安全校验 |
| GOPRIVATE | 拉取代码相关，私有仓库,仓库地址 |
| GOSUMDB | 可以配置使用哪个校验服务器和公钥来做依赖包的校验 |

- 获取GC日志: `GODEBUG=gctrace=1 go run . | grep gc`
- 不使用缓存: `GOPROXY=https://goproxy.io,direct go get ...`

sumdb相关知识:  Go module checksum database。服务器地址为sum.golang.org，保证你的库没有被别人篡改过，否则会给安全提示

如果设置了 GOSUMDB 为 “off” 或者使用 go get 的时候启用了 `-insecure` 参数，Go 不会去对下载的依赖包做安全校验

如果你的代码仓库或者模块是私有的，那么它的校验值不应该出现在互联网的公有数据库里面，但是我们本地编译的时候默认所有的依赖下载都会去尝试做校验，这样不仅会校验失败，更会泄漏一些私有仓库的路径等信息，我们可以使用 `GONOSUMDB` 这个环境变量来设置不做校验的代码仓库， 它可以设置多个匹配路径

## 基础flags

| 标记名称 | 标记描述 |
| --- | --- |
| -asmflags| 可以跟上`-D -I -s`等用于控制Go语言编译器编译汇编语言文件时的行为|
| -buildmode| 指定编译模式，例如静态链接库`.a`, 动态链接库`.so`, 可执行文件`.exe`等 |
| -compiler| 指定编译器的名称，默认为gc(go自带的编辑器) |
| -gccgoflags| 指定需要传递给gccgo编译器或链接器的标记的列表 |
| -gcflags| 传递给`go tool compile`的标记的列表 |
| -installsuffix| 设置输出目录 |
| -ldflags| 传递给`go tool link`的标记的列表 |
| -linkshared| 与`-buildmode=shared`一起使用 |
| -pkgdir| 指定目录，编译器只从这里加载归档文件`.a` |
| -tags| 指定实际编译期间使用的编译标签(约束) |
| --toolexec| 自定义vet、asm等 |

## build

| 标记名称 | 标记描述 |
| --- | --- |
| -a | 强行对所有涉及到的代码包（包含标准库中的代码包）进行重新构建，即使它们已经是最新的了。|
| -n | 打印编译期间所用到的其它命令，但是并不真正执行它们。|
| -p n | 指定编译过程中执行各任务的并行数量（确切地说应该是并发数量）。在默认情况下，该数量等于CPU的逻辑核数。但是在`darwin/arm`平台（即iPhone和iPad所用的平台）下，该数量默认是`1`。|
| -race | 开启竞态条件的检测。不过此标记目前仅在`linux/amd64`、`freebsd/amd64`、`darwin/amd64`和`windows/amd64`平台下受到支持。|
| -v | 打印出那些被编译的代码包的名字。|
| -work | 打印出编译时生成的临时工作目录的路径，并在编译结束时保留它。在默认情况下，编译结束时会删除该目录。|
| -x | 打印编译期间所用到的其它命令。注意它与`-n`标记的区别。|

### 条件编译

```go
//go:build !windows

//go:build windows
```

`go build -tags tag1 tag2`

## install

## get

`go get`命令不仅可以从像Github这样著名的代码托管站点上下载代码包，还可以从任何命令支持的代码版本控制系统（英文为Version Control System，简称为VCS）检出代码包。任何代码托管站点都是通过某个或某些代码版本控制系统来提供代码上传下载服务的。所以，更严格地讲，`go get`命令所做的是从代码版本控制系统的远程仓库中检出/更新代码包并对其进行编译和安装。

`go get`命令可以接受所有可用于`go build`命令和`go install`命令的标记。这是因为`go get`命令的内部步骤中完全包含了编译和安装这两个动作。另外，`go get`命令还有一些特有的标记

| 标记名称 | 标记描述 |
| --- | ---|
| -d | 让命令程序只执行下载动作，而不执行安装动作。|
| -f | 仅在使用`-u`标记时才有效。该标记会让命令程序忽略掉对已下载代码包的导入路径的检查。如果下载并安装的代码包所属的项目是你从别人那里Fork过来的，那么这样做就尤为重要了。|
| -fix | 让命令程序在下载代码包后先执行修正动作，而后再进行编译和安装。|
| -insecure | 允许命令程序使用非安全的scheme（如HTTP）去下载指定的代码包。如果你用的代码仓库（如公司内部的Gitlab）没有HTTPS支持，可以添加此标记。请在确定安全的情况下使用它。|
| -t |让命令程序同时下载并安装指定的代码包中的测试源码文件中依赖的代码包。|
| -u |让命令利用网络来更新已有代码包及其依赖包。默认情况下，该命令只会从网络上下载本地不存在的代码包，而不会更新已有的代码包。|

## clean

删除其他命令执行生成的文件

## doc

打印go源码中的文档

godoc内置的工具，支持http查看

## run

## test

`go test`命令的标记处理部分是庞大且繁杂的，以至于使Go语言的开发者们不得不把这一部分的逻辑从`go test`命令程序主体中分离出来并建立单独的源码文件。因为`go test`命令中包含了编译动作，所以它可以接受可用于`go build`命令的所有标记。另外，它还有很多特有的标记。这些标记的用于控制命令本身的动作，有的用于控制和设置测试的过程和环境，还有的用于生成更详细的测试结果和统计信息。

| 标记名称 | 标记描述 |
| --- | --- |
| -c | 生成用于运行测试的可执行文件，但不执行它。这个可执行文件会被命名为“pkg.test”，其中的“pkg”即为被测试代码包的导入路径的最后一个元素的名称。 |
| -i |安装/重新安装运行测试所需的依赖包，但不编译和运行测试代码。 |
| -o | 指定用于运行测试的可执行文件的名称。追加该标记不会影响测试代码的运行，除非同时追加了标记`-c`或`-i`。 |
| -v | 显示测试用例的输出结果 |
| -cover | 查看代码覆盖率 |
| --race | 竞态检查 |
| -run | 指定运行的测试代码规则 |
| -bench | 执行Bench基准测试代码 |
| -example | 执行Example示例代码 |


## list

列出代码包信息

## fmt

gofmt内置工具

| 标记名称 | 标记描述 |
| --- | --- |
| -cpuprofile | 把CPU概要写入指定文件。文件的路径应该作为此标记的值。|
| -d |显示格式化前后的不同（如果有的话），而不是直接格式化那些代码。|
| -e |报告目标源码文件中的所有错误。默认情况下，仅会显示前10个错误。|
| -l |仅把那些不符合格式化规范的、需要被命令程序改写的源码文件的绝对路径打印到标准输出。而不是把改写后的全部内容都打印到标准输出。 |
| -r |添加形如`a[b:len(a)] -> a[b:]`的重写规则。如果我们需要自定义某些额外的格式化规则，就需要用到它。规则字符串应该作为此标记的值。|
| -s |简化文件中的代码。|
| -w|把改写后的内容直接写入到文件中，而不是作为结果打印到标准输出。|

## fix

把指定代码包的所有Go语言源码文件中的旧版本代码修正为新版本的代码

| 标记名称  | 标记描述 |
| --- | ---|
| -diff |不将修正后的内容写入文件，而只打印修正前后的内容的对比信息到标准输出。|
| -r |只对目标源码文件做有限的修正操作。该标记的值即为允许的修正操作的名称。多个名称之间用英文半角逗号分隔。|
| -force |使用此标记后，即使源码文件中的代码已经与Go语言的最新版本相匹配了，也会强行执行指定的修正操作。该标记的值就是需要强行执行的修正操作的名称，多个名称之间用英文半角逗号分隔。|

## vet

检查Go语言源码中静态错误的简单工具

| 标记名称 | 标记描述 |
| --- | --- |
| -all |进行全部检查。如果有其他检查标记被设置，则命令程序会将此值变为false。默认值为true。|
| -asmdecl |对汇编语言的源码文件进行检查。默认值为false。|
| -assign | 检查赋值语句。默认值为false。|
| -atomic |检查代码中对代码包sync/atomic的使用是否正确。默认值为false。|
| -buildtags |检查编译标签的有效性。默认值为false。|
| -composites |检查复合结构实例的初始化代码。默认值为false。|
| -compositeWhiteList |是否使用复合结构检查的白名单。仅供测试使用。默认值为true。|
| -methods |检查那些拥有标准命名的方法的签名。默认值为false。|
| -printf |检查代码中对打印函数的使用是否正确。默认值为false。|
| -printfuncs |需要检查的代码中使用的打印函数的名称的列表，多个函数名称之间用英文半角逗号分隔。默认值为空字符串。|
| -rangeloops | 检查代码中对在```range```语句块中迭代赋值的变量的使用是否正确。默认值为false。|
| -structtags | 检查结构体类型的字段的标签的格式是否标准。默认值为false。|
| -unreachable |查找并报告不可到达的代码。默认值为false。|

## generator

生成代码，例如在代码中加入如下注释

`//go:generator go-bindata -o=./router/asset.go -pkg=router ./bdlog/...`

go generator即可生成

## tool compile
gcflags中标记"all=-N -l" 表示对所有包的编译应用 -N 和 -l。

执行 go tool compile --help 可以看到 -N 和 -l 的作用:

| 标记名称 | 标记描述 |
| --- | --- |
| -N | disable optimizations # 禁用优化 | 
| -l | disable inlining # 禁用内联优化 |
| -S| 打印汇编指令 |
| -m | 打印优化结果，可以用于分析逃逸分析 |

`go tool compile -N -l -S hello.go`: 编译为汇编

`//go:noinline`

> Compiler Explorer在线工具可以在线编译查看

## tool link
在构建 release 包时我们通常会加上 ldflags 参数：-ldflags '-w -s'。ldflags 给链接器传递参数，-w 将可执行文件体积缩小近 20 %。Delve 依赖于 DWARF 信息，因此如果想用 Delve 进行调试，就不能使用 -w 参数。

用 go tool link --help 查看 -w 和 -s 作用。

| 标记名称 | 标记描述 |
| --- | --- |
| -s | disable symbol table # 不使用符号表  |
| -w | disable DWARF generation # 不生成 DWARF 信息 |

## tool pprof

pprof性能分析

| 标记名称 | 标记描述 |
| --- | --- |
| -cpuprofile |指定CPU概要文件的保存路径。该路径可以是相对路径也可以是绝对路径，但其父路径必须已存在。|
| -blockprofile | 指定程序阻塞概要文件的保存路径。该路径可以是相对路径也可以是绝对路径，但其父路径必须已存在。|
| -blockprofilerate | 定义其值为n。此标记指定每发生n次Goroutine阻塞事件时，进行一次取样操作。|
| -memprofile |指定内存概要文件的保存路径。该路径可以是相对路径也可以是绝对路径，但其父路径必须已存在。|
| -memprofilerate | 定义其值为n。此标记指定每分配n个字节的堆内存时，进行一次取样操作。|

交互工具支持 gv、web、list....

```bash
# 下载cpu profile，默认从当前开始收集30s的cpu使用情况，需要等待30s
go tool pprof http://localhost:6060/debug/pprof/profile   # 30-second CPU profile
go tool pprof http://localhost:6060/debug/pprof/profile?seconds=120     # wait 120s

# 下载heap profile
go tool pprof http://localhost:6060/debug/pprof/heap      # heap profile

# 下载goroutine profile
go tool pprof http://localhost:6060/debug/pprof/goroutine # goroutine profile

# 下载block profile
go tool pprof http://localhost:6060/debug/pprof/block     # goroutine blocking profile

# 下载mutex profile
go tool pprof http://localhost:6060/debug/pprof/mutex
```

使用上面的命令下载了信息到本地之后就可以进入交互模式，查看运行信息，比较常用的命令是top、list、traces

也可以使用curl将接口返回的信息保存在`.out`中，然后使用`go tool trace trace.out`进行分析

或者可以在执行单元测试时指定输出`go test -cpuprofile cpu.prof -memprofile mem.prof -bench .`，然后对其进行分析。

### top

按指标大小列出前10个函数，比如内存是按内存占用多少，CPU是按执行时间多少。

- flat: 本函数占用的内存量
- flat%: 本函数内存占使用中内存总量的百分比
- sum%: 前面每一行flat百分比的和
- cum: 子函数的占用量也会递归的计算出来
- cum%: 累计量占总量的百分比

### list

查看某个函数的代码，以及该函数每行代码的指标信息，如果函数名不明确，会进行模糊匹配，比如`list main`会列出`main.main`和`runtime.main`。

### traces

打印所有调用栈，以及调用栈的指标信息。

## tool cgo

以使我们创建能够调用C语言代码的Go语言源码文件。这使得我们可以使用Go语言代码去封装一些C语言的代码库，并提供给Go语言代码或项目使用。

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| -cdefs | false |将改写后的源码内容以C定义模式打印到标准输出，而不生成相关的源码文件。|
| -godefs | false |将改写后的源码内容以Go定义模式打印到标准输出，而不生成相关的源码文件。|
| -objdir | "" | gcc编译的目标文件所在的路径。若未自定义则为当前目录下的_obj子目录。|
| -dynimport | "" |如果值不为空字符串，则打印为其值所代表的文件生成的动态导入数据到标准输出。|
| -dynlinker | false | 记录在dynimport模式下的动态链接器信息。|
| -dynout | "" | 将-dynimport的输出（如果有的话）写入到其值所代表的文件中。|
| -gccgo |  false | 生成可供gccgo编译器使用的文件。|
| -gccgopkgpath | "" | 对应于gccgo编译器的-fgo-pkgpath选项。|
| -gccgoprefix | "" | 对应于gccgo编译器的-fgo-prefix选项。|
| -debug-define | false | 打印相关的指令符#defines及其后续内容到标准输出。|
| -debug-gcc | false | 打印gcc调用信息到标准输出。|
| -import_runtime_cgo | true | 在生成的代码中加入语句“import runtime/cgo”。|
| -import_syscall | true | 在生成的代码中加入语句“import syscall”。|

## tool dist

`go tool dist list` 查看支持编译的`GOOS/GOARCH`

## tool trace

可以用来分析gc情况

`GODEBUG=gctrace=1 go run main.go | grep gc`

`gc 1 @0.000s 2%: 0.009+0.23+0.004 ms clock, 0.11+0.083/0.019/0.14+0.049 ms cpu, 4->6->2 MB, 5 MB goal, 12 P`

golang将GC过程分为多个步骤，其中一些步骤（mark、sweep）是可以和任务goroutine并发执行的。目的是尽可能减少需要完全停止任务运行（stop the world）的时间。

- 如果gcstoptheworld=1则标记（mark）阶段会完全停止任务运行
- 如果gcstoptheworld=2则标记（mark）和清除（sweep）阶段都会完全停止任务运行。
- 默认情况下，debug.gcstoptheworld=0。

| 值 | 含义 |
| -| -|
| gc 2 |第二个 GC 周期|
|0.001 |程序开始后的 0.001 秒|
|2% | 该 GC 周期中 CPU 的使用率|
|0.018|标记开始时， STW 所花费的时间（wall clock）|
|1.1|标记过程中，并发标记所花费的时间（wall clock）|
|0.029|标记终止时， STW 所花费的时间（wall clock）|
|0.22|标记开始时， STW 所花费的时间（cpu time）|
|0.047|标记过程中，标记辅助所花费的时间（cpu time）|
|0.074|标记过程中，并发标记所花费的时间（cpu time）|
|0.048|标记过程中，GC 空闲的时间（cpu time）|
|0.34|标记终止时， STW 所花费的时间（cpu time）|
|4|标记开始时，堆的大小的实际值|
|7|标记结束时，堆的大小的实际值|
|3|标记结束时，标记为存活的对象大小|
|5 |标记结束时，堆的大小的预测值 |
| 12 | P 的数量|

# 远程调试

使用dlv启动编译好的程序，然后在本地的ide进行远程调试的配置

`go install github.com/go-delve/delve/cmd/dlv@latest`

如果远端没有go环境，没有安装dlv，可以在本地编译打包好后上传到远端服务器


```bash
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build  
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```

`go build -gcflags "all=-N -l" main.go`  , 添加-N, -l禁用优化与内联优化

启用dlv到运行的进程，然后本地的ide进行配置后即可调试(原理是dlv利用编译好的程序中的DWARF信息，然后ide与dlv进行rpc通信，知道当前执行到哪个文件的哪一行，以及控制执行下一步等操作)

```bash
Dlv debug (当前位置)

Dlv exec [二进制文件名]

Dlv attach [pid]

debug, exec, attach 都支持从远程操控，只需为 dlv 命令加上下述参数：

--listen=:2345 --headless=true --api-version=2 --accept-multiclient

启动的参数有一个--accept-multiclient 的参数，删除掉就能退出了
```

对于容器，在编译的时候把dlv加入到容器中，然后执行`dlv exec 二进制文件`

attach 1为什么不能执行暂时不知道, `ps -ef |grep 进程名字`, 发现并不一定是，有时候命令会传入额外参数，有可能变成其他的子进程id了, `ps -C 进程名字 -o pid | sed -n 2p`来查看pid)，不过需要在docker启动中添加`--privileged --security-opt="seccomp=unconfined"`才能进行调试

然后执行`docker exec -it 容器名称 sh -c "./dlv attach \$(ps -C 进程名称 -o pid | sed -n 2p) --listen=:2345 --headless=true --api-version=2 --accept-multiclient"`

```go
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "container debug",
			"type": "go",
			"request": "attach",
			"mode": "remote",
			"remotePath": "/usr/src/code", // must the container code path
			"port": 2345,
			"host": "127.0.0.1,
		}
	]
}
```

另外如果attacth端口，该程序除了不能禁用符号表和drawf表(即使用`-ldflags="-w -s"`)以外，还必须是build之后