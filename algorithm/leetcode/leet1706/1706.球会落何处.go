package leet1706

/*
 * @lc app=leetcode.cn id=1706 lang=golang
 *
 * [1706] 球会落何处
 */

// @lc code=start
func findBall(grid [][]int) []int {
	// grid中元素使用1 和 -1 表示挡板的方向
	// 判断上方的球能否掉出去
	res := []int{}
	for i := 0; i < len(grid[0]); i++ {
		res = append(res, getResult(grid, i))
	}
	return res
}

func findBall2(grid [][]int) []int {
	n := len(grid[0])
	ans := make([]int, n)
	for j := range ans {
		col := j                   // 球的初始列
		for _, row := range grid { // 因为只要不是遇到v结构，会自动往下落一个(这里的默认逻辑，所以不需要单独处理)
			dir := row[col]
			col += dir                                  // 移动球
			if col < 0 || col == n || row[col] != dir { // 到达侧边或 V(当两边方向不同) 形
				col = -1
				break
			}
		}
		ans[j] = col // col >= 0 为成功到达底部
	}
	return ans
}

type pair struct {
	x, y int
}

// 1、模拟: 判断球在挡板会往哪走，如果又到了之前到过的地方表示走不通-1
// 对于1: 左上到右下，
// - 在上方: (0, 1), 目标点是1那新状态在下方
// - 在下方: (1, 0), 目标点是0那新状态在上方
// 对于0: 右上到左下
// - 在上方: (0, -1), 目标点是1那新状态在上方
// - 在下方: (1, 0), 目标点是0那新状态在上方
func getResult(grid [][]int, start int) int {
	m, n := len(grid), len(grid[0])
	cur := &pair{0, start}
	state := 1 // 表示在上方

	visit := map[pair]bool{}
	for cur.x < len(grid) { // 还未到最后一行
		board := grid[cur.x][cur.y]
		if board == 1 {
			if state == 1 {
				cur.y++
				if _, ok := visit[*cur]; ok || cur.y >= n {
					return -1
				}
				nextBoard := grid[cur.x][cur.y]
				if nextBoard == 1 {
					state = -1
				} else {
					state = 1
				}
			} else {
				cur.x++
				if cur.x >= m {
					break
				}
				if _, ok := visit[*cur]; ok {
					return -1
				}
				state = 1
			}
		} else {
			if state == 1 {
				cur.y--
				if _, ok := visit[*cur]; ok || cur.y < 0 {
					return -1
				}
				nextBoard := grid[cur.x][cur.y]
				if nextBoard == 1 {
					state = 1
				} else {
					state = -1
				}
			} else {
				cur.x++
				if cur.x >= m {
					break
				}
				if _, ok := visit[*cur]; ok {
					return -1
				}
				state = 1
			}
		}
		visit[*cur] = true
	}
	return cur.y
}

// @lc code=end
