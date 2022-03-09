package leet6

import "strings"

/*
 * @lc app=leetcode.cn id=6 lang=golang
 *
 * [6] Z 字形变换
 */

// @lc code=start
func convert(s string, numRows int) string {
	// 不需要模拟 找规律每行各个id的规律
	// 当一行的时候: x+1
	// 当两行的时候: 1: x+2, 2: x+2
	// 当三行的时候: 1: x+4, 2: x+2, 3: x+4
	// 当四行的时候: 1: x+6, 2: x+(4|2), 3: x+(2|4), 4: x+6
	if numRows == 1 {
		return s
	}

	buf := strings.Builder{}
	t := (numRows - 1) * 2 // 坐标最大的偏移量
	n := len(s)

	offset := t
	for i := 0; i < numRows; i++ {
		if offset == 0 { // 最后一行
			offset = t
		}

		if offset == t {
			for cur := i; cur < n; cur = cur + offset {
				buf.WriteByte(s[cur])
			}
		} else {
			// 中间的行数，每次加两个
			flag := true
			for cur := i; cur < n; {
				buf.WriteByte(s[cur])
				if flag {
					cur += offset
					flag = false
				} else {
					cur += t - offset
					flag = true
				}
			}
		}

		offset -= 2
	}
	return buf.String()
}

// @lc code=end
