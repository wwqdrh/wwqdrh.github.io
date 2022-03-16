package leet2044

/*
 * @lc app=leetcode.cn id=2044 lang=golang
 *
 * [2044] 统计按位或能得到最大值的子集数目
 */

// @lc code=start
func countMaxOrSubsets(nums []int) int {
	// 数组中的元素，选择与不选择，迭代过程中维护或运算的最大值
	// 不能动态规划，因为当前元素或结果的最大值与之前元素或结果的最大值没有直接关联

	// 1、状态压缩，使用一个整数表示子集的的状态
	maxCnt, maxOr := 0, 0

	var dfs func(pos, or int)
	dfs = func(pos, or int) {
		if pos == len(nums) {
			if or > maxOr {
				maxOr = or
				maxCnt = 1
			} else if or == maxOr {
				maxCnt++
			}
			return
		}
		dfs(pos+1, or)
		dfs(pos+1, or|nums[pos])
	}
	dfs(0, 0)

	return maxCnt
}

// @lc code=end
