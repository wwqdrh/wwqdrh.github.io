API.md中包含gin的使用规则

## 如何注册路由的

gin.New返回gin的实例

TODO

- 插入路由函数时的算法是怎样的
- request、response是做了什么包装

1、路由组

gin包含Group方法，生成并返回路由组对象

``` Golang
type RouterGroup struct {
	Handlers HandlersChain
	basePath string
	engine   *Engine
	root     bool
}

type IRoutes interface {
	Use(...HandlerFunc) IRoutes

	Handle(string, string, ...HandlerFunc) IRoutes
	Any(string, ...HandlerFunc) IRoutes
	GET(string, ...HandlerFunc) IRoutes
	POST(string, ...HandlerFunc) IRoutes
	DELETE(string, ...HandlerFunc) IRoutes
	PATCH(string, ...HandlerFunc) IRoutes
	PUT(string, ...HandlerFunc) IRoutes
	OPTIONS(string, ...HandlerFunc) IRoutes
	HEAD(string, ...HandlerFunc) IRoutes

	StaticFile(string, string) IRoutes
	Static(string, string) IRoutes
	StaticFS(string, http.FileSystem) IRoutes
}
```

Router本身与gin实例(engine组合了一个routergroup)本身都包含Use(注册中间件)、Group(继续分组)、GET、POST、DELETE等操作

以get为例

```Golang
// gin对象的get操作
// Engine，组合了routergroup, 所以是也有这些操作

// group对象的get操作
func (group *RouterGroup) GET(relativePath string, handlers ...HandlerFunc) IRoutes {
	return group.handle(http.MethodGet, relativePath, handlers)
}
```

注册路由的时候本质就是调用routergroup中的handle操作

每个routergroup中另外engine也是同一个实例，在使用group的时候会将指针传入进去的

```Golang
func (group *RouterGroup) handle(httpMethod, relativePath string, handlers HandlersChain) IRoutes {
	absolutePath := group.calculateAbsolutePath(relativePath) // 构造绝对路径
	handlers = group.combineHandlers(handlers) // 合并handlers
	group.engine.addRoute(httpMethod, absolutePath, handlers)
	return group.returnObj()
}
// combieHandlers

// 只能63个?，联系下文可知，是engines.tree中每个节点最多注册的handlers
assert1(finalSize < int(abortIndex), "too many handlers")

// engines有一个tree属性，所有的route函数都会注册到这里面
type methodTree struct {
	method string
	root   *node
}

type node struct {
	path      string
	indices   string
	wildChild bool
	nType     nodeType
	priority  uint32
	children  []*node // child nodes, at most 1 :param style node at the end of the array
	handlers  HandlersChain
	fullPath  string
}
```

