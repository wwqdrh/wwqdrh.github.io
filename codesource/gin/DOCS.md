## engine

engine也组合了RouterGroup，作为常规的增加路由的方法，除此之外engine还添加了Run、Delims、SetFuncMap等全局的方法

`gin.Default()`返回一个默认的engine对象, 使用了Logger以及Recovery中间件

``` Go
// Default returns an Engine instance with the Logger and Recovery middleware already attached.
func Default() *Engine {
	debugPrintWARNINGDefault()
	engine := New()
	engine.Use(Logger(), Recovery())
	return engine
}
```


## routergroup

routergroup中包含了node结构体，是一个树形结构，其中路由添加等都是基于这个tree进行的

## context

每次请求处理过程中都会有这个上下文，其中包含了封装的Request、Writer，engine的引用等

## binding

binding文件夹中包含了对请求参数解析的函数

## render

render文件夹中包含了对响应渲染的逻辑

