package leetcode

/*
 * @lc app=leetcode.cn id=219 lang=golang
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
// 贪心 维护每个元素在最右边的位置
func containsNearbyDuplicate(nums []int, k int) bool {
	posMapping := map[int]int{}
	for id, item := range nums {
		if val, ok := posMapping[item]; ok {
			if id-val <= k {
				return true
			}
		}
		posMapping[item] = id
	}
	return false
}

// @lc code=end
