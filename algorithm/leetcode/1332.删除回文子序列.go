package leetcode

/*
 * @lc app=leetcode.cn id=1332 lang=golang
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
func removePalindromeSub(s string) int {
	length := len(s)
	for i, j := 0, length/2; i <= j; i++ {
		if s[i] != s[length-i-1] {
			return 2
		}
	}
	return 1
}

// @lc code=end
