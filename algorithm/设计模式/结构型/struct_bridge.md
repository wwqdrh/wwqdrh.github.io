package gof

// 桥接模式，多种属性，互相组合，避免子类爆炸
// 抽象和实现解耦，让其可以独立变化

type (
	// IMsgSender IMsgSender
	IMsgSender interface {
		Send(msg string) error
	}

	// INotification 通知接口
	INotification interface {
		Notify(msg string) error
	}
)

// sender类型
type (
	// EmailMsgSender 发送邮件
	// 可能还有 电话、短信等各种实现
	EmailMsgSender struct {
		emails []string
	}
)

// notify类型
type (
	// ErrorNotification 错误通知
	// 后面可能还有 warning 各种级别
	ErrorNotification struct {
		sender IMsgSender
	}
)

// NewEmailMsgSender NewEmailMsgSender
func NewEmailMsgSender(emails []string) *EmailMsgSender {
	return &EmailMsgSender{emails: emails}
}

// Send Send
func (s *EmailMsgSender) Send(msg string) error {
	// 这里去发送消息
	return nil
}

// NewErrorNotification NewErrorNotification
func NewErrorNotification(sender IMsgSender) *ErrorNotification {
	return &ErrorNotification{sender: sender}
}

// Notify 发送通知
func (n *ErrorNotification) Notify(msg string) error {
	return n.sender.Send(msg)
}
