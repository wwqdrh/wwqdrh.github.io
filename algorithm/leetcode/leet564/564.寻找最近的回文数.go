package leet564

import (
	"math"
	"strconv"
)

/*
 * @lc app=leetcode.cn id=564 lang=golang
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
func nearestPalindromic(n string) string {
	m := len(n)
	candiates := []int{int(math.Pow10(m-1) - 1), int(math.Pow10(m) + 1)} // 1..1->9.. 9..9->10..01
	prefix, _ := strconv.Atoi(n[:(m+1)/2])
	for _, item := range []int{prefix - 1, prefix, prefix + 1} {
		other := item
		if m&1 == 1 {
			other /= 10
		}
		for ; other > 0; other /= 10 {
			item = item*10 + other%10
		}
		candiates = append(candiates, item)
	}

	ans := -1
	number, _ := strconv.Atoi(n)
	for _, item := range candiates {
		if item != number {
			// ans未设置 或者 现在的差值与ans的差值要小一点 或者 差值相同但是现在的要小一点
			if ans == -1 ||
				abs(item-number) < abs(ans-number) ||
				abs(item-number) == abs(ans-number) && item < ans {
				ans = item
			}
		}
	}
	return strconv.Itoa(ans)
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

// @lc code=end
