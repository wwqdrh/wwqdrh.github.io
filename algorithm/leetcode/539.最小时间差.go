package leetcode

import (
	"math"
	"sort"
)

/*
 * @lc app=leetcode.cn id=539 lang=golang
 *
 * [539] 最小时间差
 */

// @lc code=start
// 排序后比较相邻的两个 并且比较相邻的两个
func getMinutes(t string) int {
	return (int(t[0]-'0')*10+int(t[1]-'0'))*60 + int(t[3]-'0')*10 + int(t[4]-'0')
}

func findMinDifference(timePoints []string) int {
	sort.Strings(timePoints)
	ans := math.MaxInt32
	firstMinutes := getMinutes(timePoints[0])
	preMinutes := firstMinutes
	for _, t := range timePoints[1:] {
		minutes := getMinutes(t)
		if c := minutes - preMinutes; c < ans {
			ans = c
		}
		preMinutes = minutes
	}
	if c := firstMinutes + 1440 - preMinutes; c < ans {
		ans = c
	}
	return ans
}

// @lc code=end
