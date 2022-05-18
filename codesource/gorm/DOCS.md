## dialector

gorm可以通过传入不同的dialector实现不同的底层数据库连接

``` Go
type Dialector interface {
	Name() string
	Initialize(*DB) error
	Migrator(db *DB) Migrator
	DataTypeOf(*schema.Field) string
	DefaultValueOf(*schema.Field) clause.Expression
	BindVarTo(writer clause.Writer, stmt *Statement, v interface{})
	QuoteTo(clause.Writer, string)
	Explain(sql string, vars ...interface{}) string
}
```

其中gorm.DB实例完成之后调用DB()方法能够返回`*sql.DB`底层的连接结构，是通过从db结构体中的connPool获取到的连接

## chainable crud

`chainable_api.go`中就是整个链式调用时处理clauser的地方

gorm支持 db.Model(...).Select(...).Where(...).Limit(...)这种链式调用的模式，最终在执行的时候都会转换成sql语句

链式操作每一步最开头都有一个getInstance

如果clone大于1(这个暂时只在session中设置了NewDB为true时，db.clone为是2)，在getclone的时候会clone整个gorm.Statement对象,clone值默认是1，在open时候指定的

需要注意的是getInstance只有第一次执行的时候才会clone，因为第一次时db.clone为1，执行后新的clone变为了0，后续会直接返回这个db

``` Go
func (db *DB) getInstance() *DB {
	if db.clone > 0 {
		tx := &DB{Config: db.Config, Error: db.Error}

		if db.clone == 1 {
			// clone with new statement
			tx.Statement = &Statement{
				DB:       tx,
				ConnPool: db.Statement.ConnPool,
				Context:  db.Statement.Context,
				Clauses:  map[string]clause.Clause{},
				Vars:     make([]interface{}, 0, 8),
			}
		} else {
			// with clone statement
			tx.Statement = db.Statement.clone()
			tx.Statement.DB = tx
		}

		return tx
	}

	return db
}

```

对于链式调用的每一步都是通过Clause进行交互的，比如select操作，就会将当前传入的参数解析然后通过`tx.Statement.AddClause`加入到闭包中，后续继续的链式操作中，会将db的clauses复制不用担心丢失

``` Go
...
tx.Statement.AddClause(clause.Select{
    Distinct:   db.Statement.Distinct,
    Expression: clause.Expr{SQL: v, Vars: args},
})
...
```

`finisher_api.go`

find、findall等api，用来处理查询结果的

statement.BuildCondition将条件解析加入到Clause中

callbacks.Query().Execute()，生成sql以及执行的核心逻辑

## Statement


## callback