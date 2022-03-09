package leet1001

/*
 * @lc app=leetcode.cn id=1001 lang=golang
 *
 * [1001] 网格照明
 */

// @lc code=start
func gridIllumination(n int, lamps [][]int, queries [][]int) []int {
	// 哈希表 简单模拟 但是棋盘大小在10^9量级 lamps和queries可以作为突破口
	// (x,y) 可以由 行、列、正对角线、反对象线唯一确认
	type pair struct{ x, y int }
	points := map[pair]bool{}     // 开了哪些灯
	row := map[int]int{}          // 所在行
	col := map[int]int{}          // 所在列
	diagonal := map[int]int{}     // 正对角线 x-y
	antiDiagonal := map[int]int{} // 反对角线 x+y
	for _, lamp := range lamps {
		r, c := lamp[0], lamp[1]
		p := pair{r, c}
		if points[p] {
			continue
		}
		points[p] = true
		row[r]++
		col[c]++
		diagonal[r-c]++
		antiDiagonal[r+c]++
	}

	ans := make([]int, len(queries))
	for i, query := range queries {
		r, c := query[0], query[1]
		if row[r] > 0 || col[c] > 0 || diagonal[r-c] > 0 || antiDiagonal[r+c] > 0 {
			// 有光
			ans[i] = 1
		}

		for x := r - 1; x <= r+1; x++ {
			for y := c - 1; y <= c+1; y++ {
				if x < 0 || y < 0 || x >= n || y >= n || !points[pair{x, y}] {
					continue
				}
				// 关灯
				delete(points, pair{x, y})
				row[x]--
				col[y]--
				diagonal[x-y]--
				antiDiagonal[x+y]--
			}
		}
	}
	return ans
}

// @lc code=end
