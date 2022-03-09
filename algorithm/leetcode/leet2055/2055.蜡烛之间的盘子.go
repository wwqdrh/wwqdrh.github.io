package leet2055

/*
 * @lc app=leetcode.cn id=2055 lang=golang
 *
 * [2055] 蜡烛之间的盘子
 */

// @lc code=start
func platesBetweenCandles(s string, queries [][]int) []int {
	// *表示盘子 |表示蜡烛
	// 区间，左边的需要找到右边的第一个蜡烛i，右边的需要找到左边的第一个蜡烛j
	// 然后根据前缀和计算这个区间内的盘子数
	n := len(s)
	platesCnt := make([]int, n)
	left := make([]int, n) // 记录左边的第一个id
	l, num := -1, 0
	for i, ch := range s {
		if ch == '*' {
			num++
		} else {
			l = i
		}
		left[i] = l
		platesCnt[i] = num
	}

	// 记录右边的id
	right := make([]int, n)
	r := -1
	for i := n - 1; i >= 0; i-- {
		if s[i] == '|' {
			r = i
		}
		right[i] = r
	}

	// 计算
	res := make([]int, len(queries))
	for i, query := range queries {
		cl, cr := right[query[0]], left[query[1]]
		if cl >= 0 && cr >= 0 && cl < cr {
			res[i] = platesCnt[cr] - platesCnt[cl]
		}
	}
	return res
}

// @lc code=end
