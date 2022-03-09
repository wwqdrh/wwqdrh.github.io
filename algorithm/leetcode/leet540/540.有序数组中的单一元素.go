package leet540

/*
 * @lc app=leetcode.cn id=540 lang=golang
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
func singleNonDuplicate(nums []int) int {
	// 二分查找
	// 假设唯一的元素下标为x 利用与1异或，实现偶数+1，奇数-1
	// 左边: 如果下标为偶数 x~x+1
	// 右边: 如果下标为奇数 x~x+1
	low, high := 0, len(nums)-1
	for low < high {
		mid := low + (high-low)/2
		if nums[mid] == nums[mid^1] {
			low = mid + 1
		} else {
			high = mid
		}
	}
	return nums[low]
}

// @lc code=end
