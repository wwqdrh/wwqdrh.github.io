package leetcode

import (
	"strings"
	"unicode"
)

/*
 * @lc app=leetcode.cn id=2047 lang=golang
 *
 * [2047] 句子中的有效单词数
 */

// @lc code=start
func countValidWords(sentence string) int {
	res := 0
	for _, s := range strings.Fields(sentence) {
		if valid(s) {
			res++
		}
	}
	return res
}

func valid(s string) bool {
	hasHyphens := false
	for i, ch := range s {
		if unicode.IsDigit(ch) || strings.ContainsRune("!.,", ch) && i < len(s)-1 {
			return false
		}
		if ch == '-' {
			if hasHyphens ||
				i == 0 ||
				i == len(s)-1 ||
				!unicode.IsLower(rune(s[i-1])) ||
				!unicode.IsLower(rune(s[i+1])) {
				return false
			}
			hasHyphens = true
		}
	}
	return true
}

// @lc code=end
