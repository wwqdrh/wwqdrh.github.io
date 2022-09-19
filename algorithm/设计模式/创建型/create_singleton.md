package gof

import "sync"

////////////////////
// 饿汉式
////////////////////

// Singleton 饿汉式单例
type Singleton1 struct{}

var singleton1 *Singleton1

func init() {
	singleton1 = &Singleton1{}
}

// GetInstance 获取实例
func GetInstance() *Singleton1 {
	return singleton1
}

////////////////////
// 懒汉式(双重检测)
////////////////////

var (
	lazySingleton2 *Singleton2
	once2          = &sync.Once{}
)

type Singleton2 struct{}

// GetLazyInstance 懒汉式
func GetLazyInstance() *Singleton2 {
	if lazySingleton2 == nil {
		once2.Do(func() {
			lazySingleton2 = &Singleton2{}
		})
	}
	return lazySingleton2
}
