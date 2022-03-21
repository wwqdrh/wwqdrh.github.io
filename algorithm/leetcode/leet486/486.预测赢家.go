package leet486

/*
 * @lc app=leetcode.cn id=486 lang=golang
 *
 * [486] 预测赢家
 */

// @lc code=start

// 玩家1和2，回合制，从数组的两端选取元素，最终结果大的胜利，如果平局则玩家1获胜

// 1、递归，遍历所有的游戏情况 f(玩家，左边界，右边界，选取元素)表示选择当前状态下最终值，最终时间复杂度2^n
// 2、递归存在大量重复子问题，定义dp[i][j]表示i-j区间下，先后手的差值最大
// 	- dp[i][i] = nums[i] // 只能选这一个
// 	- Dp[i][j] = 0 // 当i>j的时候
// 	- Dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j+1])
// 最后判断dp[0][lenth-1], 如果值大于0，说明先手大于后手，先手赢
func PredictTheWinner(nums []int) bool {
	n := len(nums)
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
		dp[i][i] = nums[i]
	}

	// 状态转移
	for i := n - 2; i >= 0; i-- {
		for j := i + 1; j < n; j++ {
			dp[i][j] = max(nums[i]-dp[i+1][j], nums[j]-dp[i][j-1])
		}
	}
	return dp[0][n-1] >= 0
}

func max(a, b int) int {
	if a >= b {
		return a
	}
	return b
}

// @lc code=end
