package leet1447

import "fmt"

/*
 * @lc app=leetcode.cn id=1447 lang=golang
 *
 * [1447] 最简分数
 */

// @lc code=start

func simplifiedFractions(n int) []string {
	res := []string{}
	for i := 1; i <= n; i++ {
		for j := 1; j < i; j++ {
			if gcd(i, j) == 1 {
				res = append(res, fmt.Sprintf("%d/%d", j, i))
			}
		}
	}
	return res
}

// 求解最大公约数 需要保证x>y
func gcd(x, y int) int {
	if x < y {
		x, y = y, x
	}
	for y != 0 {
		x, y = y, x%y
	}
	return x
}

// @lc code=end
