package leet393

/*
 * @lc app=leetcode.cn id=393 lang=golang
 *
 * [393] UTF-8 编码验证
 */

// @lc code=start
func validUtf8(data []int) bool {
	for index, m := 0, len(data); index < m; {
		n := getByte(data[index])
		if n < 0 || index+n > m {
			return false
		}
		for _, ch := range data[index+1 : index+n] {
			if ch&mask2 != mask1 {
				return false
			}
		}
		index += n
	}
	return true
}

const mask1, mask2 = 1 << 7, 1<<7 | 1<<6

// -1: 不符合规范
// >0表示能表示有几个字节
func getByte(num int) int {
	if num&mask1 == 0 {
		return 1
	}
	n := 0
	for mask := mask1; num&mask != 0; mask >>= 1 {
		n++
		if n > 4 {
			return -1
		}
	}
	if n >= 2 {
		return n
	}
	return -1
}

// @lc code=end
