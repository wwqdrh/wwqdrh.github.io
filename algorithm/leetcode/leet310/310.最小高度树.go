package leet310

/*
 * @lc app=leetcode.cn id=310 lang=golang
 *
 * [310] 最小高度树
 */

// @lc code=start
func findMinHeightTrees(n int, edges [][]int) []int {
	if n == 1 {
		return []int{0}
	}

	g := make([][]int, n) // 图的连通关系
	deg := make([]int, n) // 出度数(由于这里是无向图，出度和入度是一个意思)
	for _, ch := range edges {
		x, y := ch[0], ch[1]
		g[x] = append(g[x], y)
		g[y] = append(g[y], x)
		deg[x]++
		deg[y]++
	}

	// 拓扑排序
	q := []int{}
	for ch, num := range deg {
		if num == 1 {
			q = append(q, ch)
		}
	}
	remain := n // 节点个数，剩下最后两个的时候就不用再处理了
	for remain > 2 {
		remain -= len(q)

		old := q
		q = nil

		for _, x := range old {
			for _, y := range g[x] {
				deg[y]--
				if deg[y] == 1 {
					q = append(q, y)
				}
			}
		}
	}
	return q
}

// @lc code=end
