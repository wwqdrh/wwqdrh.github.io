===tag=API
===description=gorm的API文档，是golang技术栈中的数据库orm工具，支持postgresql、mysql、sqlite3

# 模型定义

字段权限控制的部分是gorm层面的，不是数据库层面的

写权限：在执行insert\update语句时，是否可以将该字段加入到sql语句中。

读权限：是否可以从数据库中读取数据赋值到该字段

| 标签名 |	说明 |
| --- | --- |
|column|	指定 db 列名|
|type|	列数据类型，推荐使用兼容性好的通用类型，例如：所有数据库都支持 bool、int、uint、float、string、time、bytes 并且可以和其他标签一起使用，例如：not null、size, autoIncrement… 像 varbinary(8) 这样指定数据库数据类型也是支持的。在使用指定数据库数据类型时，它需要是完整的数据库数据类型，如：MEDIUMINT UNSIGNED not NULL AUTO_INCREMENT|
|serializer|	指定如何序列化与反序列化, e.g: serializer:json/gob/unixtime|
|size	| 数据的大小或者长度, e.g: size:256|
|primaryKey|	主键 |
|unique| 唯一键 |
|default	| 默认值 |
|precision|	列的精度|
|scale|	列的大小|
|not null|	非空 |
|autoIncrement|	自增字段 |
|autoIncrementIncrement|	auto increment step, controls the interval between successive column values|
|embedded|	embed the field |
|embeddedPrefix	|column name prefix for embedded fields|
|autoCreateTime	|track current time when creating, for int fields, it will track unix seconds, use value nano/milli to track unix nano/milli seconds, e.g: autoCreateTime:nano|
|autoUpdateTime|	track current time when creating/updating, for int fields, it will track unix seconds, use value nano/milli to track unix nano/milli seconds, e.g: autoUpdateTime:milli|
|index	|create index with options, use same name for multiple fields creates composite indexes, refer Indexes for details|
|uniqueIndex	|same as index, but create uniqued index|
|check|	creates check constraint, eg: check:age > 13, refer Constraints|
|<-	| 控制字段的写权限,1、 <-:create 只创建, 2、 <-:update 只更新, 3、 <-:false 没有写权限, 4、 <- 创建和更新的权限|
|->|	控制字段的读权限, 1、->:false: 没有读权限 |
|-|	ignore this field, 1、- 没有读写权限, 2、-:migration 没有migrate权限, 3、-:all 没有read/write/migrate权限|
|comment|	字段的备注|

# CRUD

> GORM 中有三种类型的方法： 链式方法，为当前语句添加子句（Where, Select, Omit, Joins, Scopes, Preload, Raw）、Finisher 方法，创建并执行当前语句（Create, First, Find, Take, Save, Update, Delete, Scan, Row, Rows）、新建会话方法，创建session并处理

`*gorm.DB`

链式调用

*锁*

- for update
- for share of ...
- for update nowait

```go
db.Clauses(clause.Locking{Strength: "UPDATE"}).Find(&users)
// SELECT * FROM `users` FOR UPDATE

db.Clauses(clause.Locking{
  Strength: "SHARE",
  Table: clause.Table{Name: clause.CurrentTable},
}).Find(&users)
// SELECT * FROM `users` FOR SHARE OF `users`

db.Clauses(clause.Locking{
  Strength: "UPDATE",
  Options: "NOWAIT",
}).Find(&users)
// SELECT * FROM `users` FOR UPDATE NOWAIT
```

*原生sql*

- Raw
- Exec
- Scan
- Session: 可以用于设置DryRun模式，在不执行的情况下生成 SQL 及其参数，可以用于准备或测试生成的 SQL

```go
stmt := db.Session(&Session{DryRun: true}).First(&user, 1).Statement
stmt.SQL.String() //=> SELECT * FROM `users` WHERE `id` = $1 ORDER BY `id`
stmt.Vars         //=> []interface{}{1}
```

- ToSQL: 返回生成的SQL但不执行

```go
sql := DB.ToSQL(func(tx *gorm.DB) *gorm.DB {
  return tx.Model(&User{}).Where("id = ?", 100).Limit(10).Order("age desc").Find(&[]User{})
})
sql //=> SELECT * FROM "users" WHERE id = 100 AND "users"."deleted_at" IS NULL ORDER BY age desc LIMIT 10
```

- Row/Rows: 可以配置Scan将结果扫描到结构体中
- Connection: 在一个连接中执行sql命令(不是一个事务)
- Clauses: 子句构造
    - Select
    - From
    - Limit
    - OrderByColumn
    - Insert

```go
db.Clauses(clause.Insert{Modifier: "IGNORE"}).Create(&user)
// INSERT IGNORE INTO users (name,age...) VALUES ("jinzhu",18...);

db.Clauses(hints.New("hint")).Find(&User{})
// SELECT * /*+ hint */ FROM `users`
```

```go
// 普通参数直接使用 ?

// 命名参数

db.Where("name1 = @name OR name2 = @name", sql.Named("name", "jinzhu")).Find(&user)
// SELECT * FROM `users` WHERE name1 = "jinzhu" OR name2 = "jinzhu"

db.Where("name1 = @name OR name2 = @name", map[string]interface{}{"name": "jinzhu"}).First(&user)
// SELECT * FROM `users` WHERE name1 = "jinzhu" OR name2 = "jinzhu" ORDER BY `users`.`id` LIMIT 1

// SQL表达式
db.Model(&product).Updates(map[string]interface{}{"price": gorm.Expr("price * ? + ?", 2, 100)})
// UPDATE "products" SET "price" = price * 2 + 100, "updated_at" = '2013-11-17 21:34:10' WHERE "id" = 3;
```

*session*

```go
type Session struct {
  DryRun                   bool // 生成sql但不执行
  PrepareStmt              bool // 预编译
  NewDB                    bool
  Initialized              bool
  SkipHooks                bool // 跳过钩子函数
  SkipDefaultTransaction   bool
  DisableNestedTransaction bool
  AllowGlobalUpdate        bool // 是否允许全局更新
  FullSaveAssociations     bool
  QueryFields              bool
  Context                  context.Context
  Logger                   logger.Interface
  NowFunc                  func() time.Time
  CreateBatchSize          int
}
```

*事务*

可以设置SipDefaultTransaction为true禁用默认事务

```go
// 嵌套事务
db.Transaction(func(tx *gorm.DB) error {
  tx.Create(&user1)

  tx.Transaction(func(tx2 *gorm.DB) error {
    tx2.Create(&user2)
    return errors.New("rollback user2") // Rollback user2
  })

  tx.Transaction(func(tx2 *gorm.DB) error {
    tx2.Create(&user3)
    return nil
  })

  return nil
})

// 手动事务
// 开始事务
tx := db.Begin()

// 在事务中执行一些 db 操作（从这里开始，您应该使用 'tx' 而不是 'db'）
tx.Create(...)

// ...

// 遇到错误时回滚事务
tx.Rollback()

// 否则，提交事务
tx.Commit()

// SavePoint
tx := db.Begin()
tx.Create(&user1)

tx.SavePoint("sp1")
tx.Create(&user2)
tx.RollbackTo("sp1") // Rollback user2

tx.Commit() // Commit user1
```

*创建元素*

> 与create搭配使用的方法

创建记录的方法包括: 结构体、map对象、SQL表达式、Context Valuer

- Create：支持单个插入以及批量插入
- Select: 创建记录并更新给出的字段
- Omit: 创建一个记录且一同忽略传递给略去的字段值

*查询元素*

- First: 获取第一条记录，主键升序
- Take: 获取一条记录, 没有指定排序字段
- Last: 获取最后一条记录，主键降序
- FirstOrInit: 未找到就根据给定条件初始化
    - Attrs: 不会用于构造sql语句，只是在未找到元素时对需要返回的结构体进行初始化
    - Assign: 无论是否找到元素都会使用指定的属性去赋值
- FirstOrCreate: 未找到元素就根据给定的元素新建一条数据
    - Attrs: 用于生成新建数据的sql语句，如果元素未查找到就需要使用的字段
    - Assign: 用于生成新建数据的sql语句，无论是否找到都会使用的属性
- Where: 查询条件, 支持sql字符串，struct(支持指定哪些字段名参与查询)、map条件
- Not
- Or
- Select：需要从数据库中获取的字段
- Order: 指定字段的排序规则, desc降序，asc升序
- Limit: 限制读取的长度
- Rows: 返回数据的行
    - Next: 是否存在下一行
    - ScanRows: 将一行记录扫描至结构体
- FindInBatches: 用于批量查询并处理记录，如果返回错误会终止后续批量操作

```go
// 每次批量处理 100 条
result := db.Where("processed = ?", false).FindInBatches(&results, 100, func(tx *gorm.DB, batch int) error {
  for _, result := range results {
    // 批量处理找到的记录
  }

  tx.Save(&results)

  tx.RowsAffected // 本次批量操作影响的记录数

  batch // Batch 1, 2, 3

  // 如果返回错误会终止后续批量操作
  return nil
})

result.Error // returned error
result.RowsAffected // 整个批量操作影响的记录数
```

```go
// Cancel limit condition with -1
db.Limit(10).Find(&users1).Limit(-1).Find(&users2)
// SELECT * FROM users LIMIT 10; (users1)
// SELECT * FROM users; (users2)
```

- Offset: 限制下标起始位置

```go
// Cancel offset condition with -1
db.Offset(10).Find(&users1).Offset(-1).Find(&users2)
// SELECT * FROM users OFFSET 10; (users1)
// SELECT * FROM users; (users2)
```
- Group
- Having
- Distinct
- Joins: 多表关联

```go
// multiple joins with parameter
db.Joins("JOIN emails ON emails.user_id = users.id AND emails.email = ?", "jinzhu@example.org").Joins("JOIN credit_cards ON credit_cards.user_id = users.id").Where("credit_cards.number = ?", "411111111111").Find(&user)

// joins预加载
db.Joins("Company", DB.Where(&Company{Alive: true})).Find(&users)
// SELECT `users`.`id`,`users`.`name`,`users`.`age`,`Company`.`id` AS `Company__id`,`Company`.`name` AS `Company__name` FROM `users` LEFT JOIN `companies` AS `Company` ON `users`.`company_id` = `Company`.`id` AND `Company`.`alive` = true;
```

- Scan

```go
type Result struct {
  Name string
  Age  int
}

var result Result
db.Table("users").Select("name", "age").Where("name = ?", "Antonio").Scan(&result)

// Raw SQL
db.Raw("SELECT name, age FROM users WHERE name = ?", "Antonio").Scan(&result)
```
- Pluck: 用于从数据库查询单个列，并将结果扫描到切片

```go
var ages []int64
db.Model(&users).Pluck("age", &ages)
```

- Scopes: 构造常用的查询，可以在调用方法时引用

```go
func AmountGreaterThan1000(db *gorm.DB) *gorm.DB {
  return db.Where("amount > ?", 1000)
}

func PaidWithCreditCard(db *gorm.DB) *gorm.DB {
  return db.Where("pay_mode_sign = ?", "C")
}

db.Scopes(AmountGreaterThan1000, PaidWithCreditCard).Find(&orders)
// 查找所有金额大于 1000 的信用卡订单
```

- Count: 用于获取匹配的记录数
- Preload: 预加载, 在一个单独查询中加载关联数据

```go
// 带条件的预加载 Order
db.Preload("Orders", "state NOT IN (?)", "cancelled").Find(&users)
// SELECT * FROM users;
// SELECT * FROM orders WHERE user_id IN (1,2,3,4) AND state NOT IN ('cancelled');

db.Where("state = ?", "active").Preload("Orders", "state NOT IN (?)", "cancelled").Find(&users)
// SELECT * FROM users WHERE state = 'active';
// SELECT * FROM orders WHERE user_id IN (1,2) AND state NOT IN ('cancelled');

// 自定义预加载SQL
db.Preload("Orders", func(db *gorm.DB) *gorm.DB {
  return db.Order("orders.amount DESC")
}).Find(&users)
// SELECT * FROM users;
// SELECT * FROM orders WHERE user_id IN (1,2,3,4) order by orders.amount DESC;

```

- Joins: 预加载，使用inner join加载数据

*更新*

- Save: 保存结构体中的所有字段，即使字段是零值
- Update：更新单个列时
- Updates: 更新多个列, 支持struct以及map, 当使用struct更新时，默认只会更新非零值的字段
- UpdateColumn: 更新指定列，不使用hook，不追踪更新时间
- UpdateColumns: 批量更新，不使用hook，不追踪更新时间

```go
// 如果在没有任何条件的情况下执行批量更新，默认情况下，GORM 不会执行该操作，并返回 ErrMissingWhereClause 错误

// 可以使用原生sql或者db.Session中开启允许全局更新

db.Exec("UPDATE users SET name = ?", "jinzhu")
// UPDATE users SET name = "jinzhu"

db.Session(&gorm.Session{AllowGlobalUpdate: true}).Model(&User{}).Update("name", "jinzhu")
// UPDATE users SET `name` = "jinzhu"
```

- Select: 更新值时指定更新哪些字段
- Omit: 更新值时忽略的字段

```go
// 如果使用了 * 那么处理时就会包括零值字段

// Select 除 Role 外的所有字段（包括零值字段的所有字段）
db.Model(&user).Select("*").Omit("Role").Update(User{Name: "jinzhu", Role: "admin", Age: 0})
```

- Clauses

```go
// 返回修改行的数据
// 返回所有列
var users []User
DB.Model(&users).Clauses(clause.Returning{}).Where("role = ?", "admin").Update("salary", gorm.Expr("salary * ?", 2))
// UPDATE `users` SET `salary`=salary * 2,`updated_at`="2021-10-28 17:37:23.19" WHERE role = "admin" RETURNING *
// users => []User{{ID: 1, Name: "jinzhu", Role: "admin", Salary: 100}, {ID: 2, Name: "jinzhu.2", Role: "admin", Salary: 1000}}

// 返回指定的列
DB.Model(&users).Clauses(clause.Returning{Columns: []clause.Column{{Name: "name"}, {Name: "salary"}}}).Where("role = ?", "admin").Update("salary", gorm.Expr("salary * ?", 2))
// UPDATE `users` SET `salary`=salary * 2,`updated_at`="2021-10-28 17:37:23.19" WHERE role = "admin" RETURNING `name`, `salary`
// users => []User{{ID: 0, Name: "jinzhu", Role: "", Salary: 100}, {ID: 0, Name: "jinzhu.2", Role: "", Salary: 1000}}
```

*删除元素*

如果模型包含一个gorm.deletedat字段在删除的时候是触发软删除，将这些字段设置为删除时间，软删除的标志除了时间戳还能够使用`soft_delete.DeletedAt`(1/0)

```go
import "gorm.io/plugin/soft_delete"

type User struct {
  ID    uint
  Name  string
  IsDel soft_delete.DeletedAt `gorm:"softDelete:flag"`
}

// 查询
SELECT * FROM users WHERE is_del = 0;

// 删除
UPDATE users SET is_del = 1 WHERE ID = 1;
```

- Delete: 需要指定主键否则会触发全局删除(与上文的全局更新类似，要启用需要设置`AllowGlobalUpdate: true`), 默认是根据主键删除
- Clauese: (与上文类似，可以设置clause.Returning返回删除行的数据)
- Unscoped: 使用Unscoped能够找到被软删除的记录，可以用于硬删除的记录

```go
// 查找被软删除的记录
db.Unscoped().Where("age = 20").Find(&users)
// SELECT * FROM users WHERE age = 20;
// 永久删除
db.Unscoped().Delete(&order)
// DELETE FROM orders WHERE id=10;
```





## 自定义数据类型

```go
// 通过 map 创建记录
db.Model(User{}).Create(map[string]interface{}{
  "Name": "jinzhu",
  "Location": clause.Expr{SQL: "ST_PointFromText(?)", Vars: []interface{}{"POINT(100 100)"}},
})
// INSERT INTO `users` (`name`,`location`) VALUES ("jinzhu",ST_PointFromText("POINT(100 100)"));

// 通过自定义类型创建记录
type Location struct {
    X, Y int
}

// Scan 方法实现了 sql.Scanner 接口
func (loc *Location) Scan(v interface{}) error {
  // Scan a value into struct from database driver
}

func (loc Location) GormDataType() string {
  return "geometry"
}

func (loc Location) GormValue(ctx context.Context, db *gorm.DB) clause.Expr {
  return clause.Expr{
    SQL:  "ST_PointFromText(?)",
    Vars: []interface{}{fmt.Sprintf("POINT(%d %d)", loc.X, loc.Y)},
  }
}

type User struct {
  Name     string
  Location Location
}

db.Create(&User{
  Name:     "jinzhu",
  Location: Location{X: 100, Y: 100},
})
// INSERT INTO `users` (`name`,`location`) VALUES ("jinzhu",ST_PointFromText("POINT(100 100)"))
```

## 钩子

GORM 允许用户定义的钩子有 BeforeSave, BeforeCreate, AfterSave, AfterCreate 创建记录时将调用这些钩子方法

AfterFind

BeforeUpdate、AfterUpdate

如果需要跳过钩子方法，您可以使用SkipHooks会话模式

```go
DB.Session(&gorm.Session{SkipHooks: true}).Create(&user)

// 检查字段是否变更
func (u *User) BeforeUpdate(tx *gorm.DB) (err error) {
  // 如果 Role 字段有变更
    if tx.Statement.Changed("Role") {
    return errors.New("role not allowed to change")
    }

  if tx.Statement.Changed("Name", "Admin") { // 如果 Name 或 Role 字段有变更
    tx.Statement.SetColumn("Age", 18)
  }

  // 如果任意字段有变更
    if tx.Statement.Changed() {
        tx.Statement.SetColumn("RefreshedAt", time.Now())
    }
    return nil
}

// 在update时修改值
func (user *User) BeforeSave(tx *gorm.DB) (err error) {
  if pw, err := bcrypt.GenerateFromPassword(user.Password, 0); err == nil {
    tx.Statement.SetColumn("EncryptedPassword", pw)
  }

  if tx.Statement.Changed("Code") {
    user.Age += 20
    tx.Statement.SetColumn("Age", user.Age)
  }
}

db.Model(&user).Update("Name", "jinzhu")
```



# API

## 公共函数

`func Expr(expr string, args ...interface{}) clause.Expr`

可以传给sql表达式作为参数

`func Scan(rows Rows, db *DB, mode ScanMode)`

将Rows转为sql表达式

## 类型对象

`type ColumnType`

列对象的接口

``` go
type ColumnType interface {
	Name() string
	DatabaseTypeName() string                 // varchar
	ColumnType() (columnType string, ok bool) // varchar(64)
	PrimaryKey() (isPrimaryKey bool, ok bool)
	AutoIncrement() (isAutoIncrement bool, ok bool)
	Length() (length int64, ok bool)
	DecimalSize() (precision int64, scale int64, ok bool)
	Nullable() (nullable bool, ok bool)
	Unique() (unique bool, ok bool)
	ScanType() reflect.Type
	Comment() (value string, ok bool)
	DefaultValue() (value string, ok bool)
}
```

`type ConnPool`

```go
type ConnPool interface {
	PrepareContext(ctx context.Context, query string) (*sql.Stmt, error)
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
	QueryContext(ctx context.Context, query string, args ...interface{}) (*sql.Rows, error)
	QueryRowContext(ctx context.Context, query string, args ...interface{}) *sql.Row
}
```

`type ConnPoolBeginner`

```go
type ConnPoolBeginner interface {
	BeginTx(ctx context.Context, opts *sql.TxOptions) (ConnPool, error)
}
```

## Association
type Association

用于处理对象表之间的关联关系

- func (association *Association) Append(values ...interface{}) error
- func (association *Association) Clear() error
- func (association *Association) Count() (count int64)
- func (association *Association) Delete(values ...interface{}) error
- func (association *Association) Find(out interface{}, conds ...interface{}) error
- func (association *Association) Replace(values ...interface{}) error

## Config

`type Config`

gorm的配置对象

func (c *Config) AfterInitialize(db *DB) error

func (c *Config) Apply(config *Config) error

## DB

`type DB`

gorm核心对象

`func Open(dialector Dialector, opts ...Option) (db *DB, err error)``

gorm.DB的构造函数

func (db *DB) AddError(err error) error
func (db *DB) Assign(attrs ...interface{}) (tx *DB)
func (db *DB) Association(column string) *Association
func (db *DB) Attrs(attrs ...interface{}) (tx *DB)
func (db *DB) AutoMigrate(dst ...interface{}) error
func (db *DB) Begin(opts ...*sql.TxOptions) *DB
func (db *DB) Callback() *callbacks
func (db *DB) Clauses(conds ...clause.Expression) (tx *DB)
func (db *DB) Commit() *DB
func (db *DB) Connection(fc func(tx *DB) error) (err error)
func (db *DB) Count(count *int64) (tx *DB)
func (db *DB) Create(value interface{}) (tx *DB)
func (db *DB) CreateInBatches(value interface{}, batchSize int) (tx *DB)
func (db *DB) DB() (*sql.DB, error)
func (db *DB) Debug() (tx *DB)
func (db *DB) Delete(value interface{}, conds ...interface{}) (tx *DB)
func (db *DB) Distinct(args ...interface{}) (tx *DB)
func (db *DB) Exec(sql string, values ...interface{}) (tx *DB)
func (db *DB) Find(dest interface{}, conds ...interface{}) (tx *DB)
func (db *DB) FindInBatches(dest interface{}, batchSize int, fc func(tx *DB, batch int) error) *DB
func (db *DB) First(dest interface{}, conds ...interface{}) (tx *DB)
func (db *DB) FirstOrCreate(dest interface{}, conds ...interface{}) (tx *DB)
func (db *DB) FirstOrInit(dest interface{}, conds ...interface{}) (tx *DB)
func (db *DB) Get(key string) (interface{}, bool)
func (db *DB) Group(name string) (tx *DB)
func (db *DB) Having(query interface{}, args ...interface{}) (tx *DB)
func (db *DB) InstanceGet(key string) (interface{}, bool)
func (db *DB) InstanceSet(key string, value interface{}) *DB
func (db *DB) Joins(query string, args ...interface{}) (tx *DB)
func (db *DB) Last(dest interface{}, conds ...interface{}) (tx *DB)
func (db *DB) Limit(limit int) (tx *DB)
func (db *DB) Migrator() Migrator
func (db *DB) Model(value interface{}) (tx *DB)
func (db *DB) Not(query interface{}, args ...interface{}) (tx *DB)
func (db *DB) Offset(offset int) (tx *DB)
func (db *DB) Omit(columns ...string) (tx *DB)
func (db *DB) Or(query interface{}, args ...interface{}) (tx *DB)
func (db *DB) Order(value interface{}) (tx *DB)
func (db *DB) Pluck(column string, dest interface{}) (tx *DB)
func (db *DB) Preload(query string, args ...interface{}) (tx *DB)
func (db *DB) Raw(sql string, values ...interface{}) (tx *DB)
func (db *DB) Rollback() *DB
func (db *DB) RollbackTo(name string) *DB
func (db *DB) Row() *sql.Row
func (db *DB) Rows() (*sql.Rows, error)
func (db *DB) Save(value interface{}) (tx *DB)
func (db *DB) SavePoint(name string) *DB
func (db *DB) Scan(dest interface{}) (tx *DB)
func (db *DB) ScanRows(rows *sql.Rows, dest interface{}) error
func (db *DB) Scopes(funcs ...func(*DB) *DB) (tx *DB)
func (db *DB) Select(query interface{}, args ...interface{}) (tx *DB)
func (db *DB) Session(config *Session) *DB
func (db *DB) Set(key string, value interface{}) *DB
func (db *DB) SetupJoinTable(model interface{}, field string, joinTable interface{}) error
func (db *DB) Table(name string, args ...interface{}) (tx *DB)
func (db *DB) Take(dest interface{}, conds ...interface{}) (tx *DB)
func (db *DB) ToSQL(queryFn func(tx *DB) *DB) string
func (db *DB) Transaction(fc func(tx *DB) error, opts ...*sql.TxOptions) (err error)
func (db *DB) Unscoped() (tx *DB)
func (db *DB) Update(column string, value interface{}) (tx *DB)
func (db *DB) UpdateColumn(column string, value interface{}) (tx *DB)
func (db *DB) UpdateColumns(values interface{}) (tx *DB)
func (db *DB) Updates(values interface{}) (tx *DB)
func (db *DB) Use(plugin Plugin) error
func (db *DB) Where(query interface{}, args ...interface{}) (tx *DB)
func (db *DB) WithContext(ctx context.Context) *DB

## DeleteAt
type DeletedAt
func (DeletedAt) DeleteClauses(f *schema.Field) []clause.Interface
func (n DeletedAt) MarshalJSON() ([]byte, error)
func (DeletedAt) QueryClauses(f *schema.Field) []clause.Interface
func (n *DeletedAt) Scan(value interface{}) error
func (n *DeletedAt) UnmarshalJSON(b []byte) error
func (DeletedAt) UpdateClauses(f *schema.Field) []clause.Interface
func (n DeletedAt) Value() (driver.Value, error)
type Dialector
type GetDBConnector
type Migrator
type Model
type Option
type Plugin

## PreparedStmtDB
type PreparedStmtDB
func (db *PreparedStmtDB) BeginTx(ctx context.Context, opt *sql.TxOptions) (ConnPool, error)
func (db *PreparedStmtDB) Close()
func (db *PreparedStmtDB) ExecContext(ctx context.Context, query string, args ...interface{}) (result sql.Result, err error)
func (db *PreparedStmtDB) GetDBConn() (*sql.DB, error)
func (db *PreparedStmtDB) QueryContext(ctx context.Context, query string, args ...interface{}) (rows *sql.Rows, err error)
func (db *PreparedStmtDB) QueryRowContext(ctx context.Context, query string, args ...interface{}) *sql.Row

## PreparedStmtTX
type PreparedStmtTX
func (tx *PreparedStmtTX) Commit() error
func (tx *PreparedStmtTX) ExecContext(ctx context.Context, query string, args ...interface{}) (result sql.Result, err error)
func (tx *PreparedStmtTX) QueryContext(ctx context.Context, query string, args ...interface{}) (rows *sql.Rows, err error)
func (tx *PreparedStmtTX) QueryRowContext(ctx context.Context, query string, args ...interface{}) *sql.Row
func (tx *PreparedStmtTX) Rollback() error
type Rows
type SavePointerDialectorInterface
type ScanMode
type Session

## Clause
type SoftDeleteDeleteClause
func (sd SoftDeleteDeleteClause) Build(clause.Builder)
func (sd SoftDeleteDeleteClause) MergeClause(*clause.Clause)
func (sd SoftDeleteDeleteClause) ModifyStatement(stmt *Statement)
func (sd SoftDeleteDeleteClause) Name() string
type SoftDeleteQueryClause
func (sd SoftDeleteQueryClause) Build(clause.Builder)
func (sd SoftDeleteQueryClause) MergeClause(*clause.Clause)
func (sd SoftDeleteQueryClause) ModifyStatement(stmt *Statement)
func (sd SoftDeleteQueryClause) Name() string
type SoftDeleteUpdateClause
func (sd SoftDeleteUpdateClause) Build(clause.Builder)
func (sd SoftDeleteUpdateClause) MergeClause(*clause.Clause)
func (sd SoftDeleteUpdateClause) ModifyStatement(stmt *Statement)
func (sd SoftDeleteUpdateClause) Name() string

## Statement
type Statement
func (stmt *Statement) AddClause(v clause.Interface)
func (stmt *Statement) AddClauseIfNotExists(v clause.Interface)
func (stmt *Statement) AddVar(writer clause.Writer, vars ...interface{})
func (stmt *Statement) Build(clauses ...string)
func (stmt *Statement) BuildCondition(query interface{}, args ...interface{}) []clause.Expression
func (stmt *Statement) Changed(fields ...string) bool
func (stmt *Statement) Parse(value interface{}) (err error)
func (stmt *Statement) ParseWithSpecialTableName(value interface{}, specialTableName string) (err error)
func (stmt *Statement) Quote(field interface{}) string
func (stmt *Statement) QuoteTo(writer clause.Writer, field interface{})
func (stmt *Statement) SelectAndOmitColumns(requireCreate, requireUpdate bool) (map[string]bool, bool)
func (stmt *Statement) SetColumn(name string, value interface{}, fromCallbacks ...bool)
func (stmt *Statement) WriteByte(c byte) error
func (stmt *Statement) WriteQuoted(value interface{})
func (stmt *Statement) WriteString(str string) (int, error)
type StatementModifier
type Stmt
type Tx
type TxBeginner
type TxCommitter
type Valuer
type ViewOption