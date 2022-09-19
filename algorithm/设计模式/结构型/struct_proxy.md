package gof

import (
	"log"
	"time"
)

// 代理模式

////////////////////
// 静态代理
// 静态代理类需要和类实现相同的方法接口
////////////////////

// IUser IUser
type IProxyUser interface {
	Login(username, password string) error
}

// User 用户
type ProxyUser struct {
}

// Login 用户登录
func (u *ProxyUser) Login(username, password string) error {
	// 不实现细节
	return nil
}

// UserProxy 代理类
type ProxyUserProxy struct {
	user *ProxyUser
}

// NewUserProxy NewUserProxy
func NewProxyUserProxy(user *ProxyUser) *ProxyUserProxy {
	return &ProxyUserProxy{
		user: user,
	}
}

// Login 登录，和 user 实现相同的接口
func (p *ProxyUserProxy) Login(username, password string) error {
	// before 这里可能会有一些统计的逻辑
	start := time.Now()

	// 这里是原有的业务逻辑
	if err := p.user.Login(username, password); err != nil {
		return err
	}

	// after 这里可能也有一些监控统计的逻辑
	log.Printf("user login cost time: %s", time.Now().Sub(start))

	return nil
}
