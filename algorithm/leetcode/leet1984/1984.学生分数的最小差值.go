package leet1984

import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=1984 lang=golang
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
func minimumDifference(nums []int, k int) int {
	// 排序+滑动窗口
	sort.Slice(nums, func(i, j int) bool { return nums[i] < nums[j] })
	numsLen := len(nums)
	res := 1<<63 - 1
	for i := 0; i < numsLen; i++ {
		j := i + k - 1 // j-i+1 = k
		if j > numsLen {
			break
		}
		if nums[j]-nums[i] < res {
			res = nums[j] - nums[i]
		}
	}
	return res
}

// @lc code=end
