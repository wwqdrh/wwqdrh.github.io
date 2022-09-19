package gof

import "fmt"

// 1、将函数封装成对象
// 2、直接使用函数作为参数传递

// ICommand 命令
type ICommand interface {
	Execute() error
}

// StartCommand 游戏开始运行
type StartCommand struct{}

// NewStartCommand NewStartCommand
func NewStartCommand( /*正常情况下这里会有一些参数*/ ) *StartCommand {
	return &StartCommand{}
}

// Execute Execute
func (c *StartCommand) Execute() error {
	fmt.Println("game start")
	return nil
}

// ArchiveCommand 游戏存档
type ArchiveCommand struct{}

// NewArchiveCommand NewArchiveCommand
func NewArchiveCommand( /*正常情况下这里会有一些参数*/ ) *ArchiveCommand {
	return &ArchiveCommand{}
}

// Execute Execute
func (c *ArchiveCommand) Execute() error {
	fmt.Println("game archive")
	return nil
}

////////////////////
// 直接使用函数作为参数
////////////////////

// Command 命令
type Command func() error

// StartCommandFunc 返回一个 Command 命令
// 是因为正常情况下不会是这么简单的函数
// 一般都会有一些参数
func StartCommandFunc() Command {
	return func() error {
		fmt.Println("game start")
		return nil
	}
}

// ArchiveCommandFunc ArchiveCommandFunc
func ArchiveCommandFunc() Command {
	return func() error {
		fmt.Println("game archive")
		return nil
	}
}
