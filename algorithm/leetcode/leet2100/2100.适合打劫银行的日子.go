package leet2100

/*
 * @lc app=leetcode.cn id=2100 lang=golang
 *
 * [2100] 适合打劫银行的日子
 */

// @lc code=start
func goodDaysToRobBank(security []int, time int) (ans []int) {
	n := len(security)
	left := make([]int, n)
	right := make([]int, n)
	for i := 1; i < n; i++ {
		if security[i] <= security[i-1] {
			left[i] = left[i-1] + 1
		}
		if security[n-i-1] <= security[n-i] {
			right[n-i-1] = right[n-i] + 1
		}
	}

	for i := time; i < n-time; i++ {
		if left[i] >= time && right[i] >= time {
			ans = append(ans, i)
		}
	}
	return
}

// @lc code=end
