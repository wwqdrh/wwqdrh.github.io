package leet1994

import (
	"math"
)

/*
 * @lc app=leetcode.cn id=1994 lang=golang
 *
 * [1994] 好子集的数目
 */

// @lc code=start
func numberOfGoodSubsets(nums []int) int {
	var mod int64 = int64(math.Pow(10, 9)) + 7

	// 计数，预处理
	cnts := make([]int, 31) // 因为不同位置的元素也算
	for _, num := range nums {
		cnts[num]++
	}
	for _, num := range []int{4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28} {
		cnts[num] = 0 // 存在平方因子的需要排除
	}

	mutex := make([]int, 31) // 存储每个元素与其他元素的互斥情况，当mutex[i]>0的时候表示i与值各个位上的不能同时选择
	for i := 2; i < 31; i++ {
		for j := 2; j < 31; j++ {
			if i != j && gcd(i, j) > 1 {
				// 存在公因数
				mutex[i] |= 1 << j // 表示互斥
			}
		}
	}

	var dfs func(n, chose int) int64 // 当前遍历的数字以及之前选择的数字
	dfs = func(n, chose int) int64 {
		if n == 31 {
			if chose > 0 {
				return 1
			}
			return 0 // 如果到终点没有选择任何数直接返回0
		}
		ret := dfs(n+1, chose)
		if cnts[n] > 0 && mutex[n]&chose == 0 {
			// 不存在互斥的元素
			ret += int64(cnts[n]) * dfs(n+1, chose|(1<<n))
		}
		return ret % mod
	}

	return int(dfs(2, 0) * fastPow(2, cnts[1], int(mod)) % mod)
}

func gcd(a, b int) int {
	// 辗转相除求最大公因数
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

// a^b并且需要mod
func fastPow(a, b, mod int) int64 {
	ret, mul := 1, a
	for b > 0 {
		if b&1 == 1 {
			ret = ret * mul % mod
		}
		mul = mul * mul % mod
		b >>= 1
	}
	return int64(ret)
}

// @lc code=end
