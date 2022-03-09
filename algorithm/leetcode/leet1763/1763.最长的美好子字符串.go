package leet1763

import "unicode"

/*
 * @lc app=leetcode.cn id=1763 lang=golang
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
func longestNiceSubstring(s string) string {
	ans := ""
	for i := range s {
		lower, upper := 0, 0
		for j := i; j < len(s); j++ {
			if unicode.IsLower(rune(s[j])) {
				lower |= 1 << (s[j] - 'a')
			} else {
				upper |= 1 << (s[j] - 'A')
			}
			if lower == upper && j-i+1 > len(ans) {
				ans = s[i : j+1]
			}
		}
	}
	return ans
}

// @lc code=end
