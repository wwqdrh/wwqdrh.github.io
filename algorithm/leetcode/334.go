package leetcode

import "math"

// 判断长度为三的递增子序列
// 双向遍历 维护每个元素及其左边的最小值 以及元素及其右边的最大值 当存在某个元素比左边最小大右边最大小则满足条件 但是空间复杂度在O(n) 而且无法进行扩展 比如四个 五个升序序列
// 贪心 遍历的时候维护first、second... 要求时间O(n) 空间O(1)
// !当cur比first小的时候更新first会到second后面，但是second前一定已经存在了比他小的，如果再来一个大于second依旧是满足三个递增序列的
// 更一般的情况是第300题
func increasingTriplet(nums []int) bool {
	if len(nums) < 3 {
		return false
	}
	first, second := nums[0], math.MaxInt64
	for i := 1; i < len(nums); i++ {
		cur := nums[i]
		if cur > second {
			return true
		} else if cur > first {
			second = cur
		} else {
			first = cur
		}
	}
	return false
}
