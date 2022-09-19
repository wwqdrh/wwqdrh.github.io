package gof

import (
	"fmt"
	"reflect"
)

// Input 假设这表示一个输入框
type Input string

// String String
func (i Input) String() string {
	return string(i)
}

// Selection 假设这表示一个选择框
type Selection string

// Selected 当前选中的对象
func (s Selection) Selected() string {
	return string(s)
}

// Button 假设这表示一个按钮
type Button struct {
	onClick func()
}

// SetOnClick 添加点击事件回调
func (b *Button) SetOnClick(f func()) {
	b.onClick = f
}

// IMediator 中介模式接口
type IMediator interface {
	HandleEvent(component interface{})
}

// Dialog 对话框组件
type Dialog struct {
	LoginButton         *Button
	RegButton           *Button
	Selection           *Selection
	UsernameInput       *Input
	PasswordInput       *Input
	RepeatPasswordInput *Input
}

// HandleEvent HandleEvent
func (d *Dialog) HandleEvent(component interface{}) {
	switch {
	case reflect.DeepEqual(component, d.Selection):
		if d.Selection.Selected() == "登录" {
			fmt.Println("select login")
			fmt.Printf("show: %s\n", d.UsernameInput)
			fmt.Printf("show: %s\n", d.PasswordInput)
		} else if d.Selection.Selected() == "注册" {
			fmt.Println("select register")
			fmt.Printf("show: %s\n", d.UsernameInput)
			fmt.Printf("show: %s\n", d.PasswordInput)
			fmt.Printf("show: %s\n", d.RepeatPasswordInput)
		}
		// others, 如果点击了登录按钮，注册按钮
	}
}
