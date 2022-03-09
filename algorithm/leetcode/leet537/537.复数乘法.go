package leet537

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
)

/*
 * @lc app=leetcode.cn id=537 lang=golang
 *
 * [537] 复数乘法
 */

// @lc code=start
func complexNumberMultiply(num1 string, num2 string) string {
	a, err := NewComplex(num1)
	if err != nil {
		return ""
	}
	b, err := NewComplex(num2)
	if err != nil {
		return ""
	}
	a.Mul(b)
	return a.GetString()
}

type Complex struct {
	i int64
	j int64
}

func NewComplex(word string) (*Complex, error) {
	var aInt, bInt int64
	{
		t := strings.Split(word, "+")
		if len(t) != 2 || t[1][len(t[1])-1] != 'i' {
			return nil, errors.New("数据不规范")
		}
		a, b := t[0], t[1][:len(t[1])-1]
		var err error
		if aInt, err = strconv.ParseInt(a, 10, 64); err != nil {
			return nil, err
		}
		if bInt, err = strconv.ParseInt(b, 10, 64); err != nil {
			return nil, err
		}
	}
	return &Complex{
		i: aInt,
		j: bInt,
	}, nil
}

// 复数乘法规则
// a+bi * c+di = (ac-bd) + (ad + bc)i
func (c *Complex) Mul(other *Complex) {
	i, j := c.i, c.j
	oi, oj := other.i, other.j

	c.i = i*oi - j*oj
	c.j = i*oj + j*oi
}

func (c *Complex) GetString() string {
	return fmt.Sprintf("%d+%di", c.i, c.j)
}

// @lc code=end
