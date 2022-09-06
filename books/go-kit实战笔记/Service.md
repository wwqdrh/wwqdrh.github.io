Service层则专注于业务逻辑，就是我们的业务类、接口等相关信息存放。


业务逻辑层，定义接口以及具体实现

```go
import (
	"context"
	"errors"
	"strings"
)

var ErrEmpty = errors.New("Empty string")

type StringService interface {
	Uppercase(string) (string, error)
	Count(string) int
}

type stringService struct{}

func (stringService) Uppercase(s string) (string, error) {
	if s == "" {
		return "", ErrEmpty
	}
	return strings.ToUpper(s), nil
}

func (stringService) Count(s string) int {
	return len(s)
}
```
