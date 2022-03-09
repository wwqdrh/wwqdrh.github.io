package leetcode

/*
 * @lc app=leetcode.cn id=1220 lang=golang
 *
 * [1220] 统计元音字母序列的数目
 */

// @lc code=start
// 设dp[i][...]表示以...结尾的长度为i的可能数量
// 由题意转换可知
// 1、a 前面只能是 e, i u
// 2、e 前面只能是 a，i
// 3、i 前面是 e o
// 4、o 前面是 i
// 5、u 前面是 i o
func countVowelPermutation(n int) int {
	const mod int = 1e9 + 7
	dp := [5]int{1, 1, 1, 1, 1} // a e i o u
	for i := 1; i < n; i++ {
		dp = [5]int{
			(dp[1] + dp[2] + dp[4]) % mod,
			(dp[0] + dp[2]) % mod,
			(dp[1] + dp[3]) % mod,
			dp[2],
			(dp[2] + dp[3]) % mod,
		}
	}

	ans := 0
	for _, v := range dp {
		ans = (ans + v) % mod
	}
	return ans
}

// @lc code=end
