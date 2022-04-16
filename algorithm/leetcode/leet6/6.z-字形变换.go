package leet6

/*
 * @lc app=leetcode.cn id=6 lang=golang
 *
 * [6] Z 字形变换
 */

// @lc code=start
func convert(s string, numRows int) string {
	n, r := len(s), numRows
	if r == 1 || r >= n {
		return s
	}

	t := r*2 - 2 // 到这一行下一个坐标位置的步数
	ans := make([]byte, 0, n)
	for i := 0; i < r; i++ { // 枚举矩阵的行
		for j := 0; j+1 < n; j += t { // 枚举每个周期的起始下标
			ans = append(ans, s[j+1]) // 当前周期的第一个字符
			if 0 < i && i < r-1 && j+t-i < n {
				ans = append(ans, s[j+t-i])
			}
		}
	}
	return string(ans)
}

// @lc code=end
