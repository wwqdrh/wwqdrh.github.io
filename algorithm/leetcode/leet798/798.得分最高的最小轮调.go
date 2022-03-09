package leet798

import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=798 lang=golang
 *
 * [798] 得分最高的最小轮调
 */

// @lc code=start
func bestRotation(nums []int) int {
	// 数组变换 需要计算值以及变化后的下标
	// 暴力: n^2, 遍历所有可能的k并计算新的下标与值的关系(不需要真的移动)
	// 一个元素往后移动越有可能计分，也就是说如何移动能够使满足增分的区间最大
	// 1、如果元素 值<k+索引 => k>值-索引 加分 （索引<k）
	// 2、值<索引-k => k>索引-值 加分 (索引>k)
	n := len(nums)
	state1, state2 := make([]int, n), make([]int, n)
	for i, ch := range nums {
		state1[i] = ch - i
		state2[i] = i - ch
	}
	// 设变量k，则左边的值小于k的个数+右边的值小于k的个数
	maxVal, id := 0, 0
	for k := 0; k < n; k++ {
		left, right := state1[:k], state2[k:] // 求小于k的个数 排序+二分
		// TODO: 每次都要重新排序浪费时间，可以使用两个堆进行维护 但是无法知道具体前面有多少个元素
		sort.Slice(left, func(i, j int) bool { return left[i] < left[j] })
		sort.Slice(right, func(i, j int) bool { return right[i] < right[j] })

		i, j := midIndex(left, k), midIndex(right, k)
		if i+j > maxVal {
			maxVal = i + j
			id = k
		}
	}
	return id
}

func midIndex(nums []int, target int) int {
	i, j := 0, len(nums)-1
	for i < j {
		mid := i + (j-i)/2
		if nums[mid] == target {
			return mid
		}
		if nums[mid] > target {
			j = mid
		}
		if nums[mid] < target {
			i = mid + 1
		}
	}
	return i
}

// @lc code=end
