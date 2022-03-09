package leet1020

/*
 * @lc app=leetcode.cn id=1020 lang=golang
 *
 * [1020] 飞地的数量
 */

// @lc code=start
type pos struct {
	x, y int
}

func numEnclaves(grid [][]int) int {
	if len(grid) == 0 {
		return 0
	}
	totalGround := 0
	m, n := len(grid), len(grid[0])
	queue := []pos{}
	visit := map[pos]bool{}
	for i, row := range grid {
		for j, item := range row {
			if item == 1 {
				totalGround++
				if i == 0 || i == m-1 || j == 0 || j == n-1 {
					cur := pos{
						x: i, y: j,
					}
					queue = append(queue, cur)
					visit[cur] = true
				}
			}
		}
	}

	// bfs
	canEscape := 0
	directions := []pos{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]
		canEscape++
		for _, dire := range directions {
			curX, curY := cur.x+dire.x, cur.y+dire.y
			curPos := pos{curX, curY}
			if curX < 0 || curX >= m || curY < 0 || curY >= n {
				continue
			}
			if _, ok := visit[curPos]; ok {
				continue
			}
			if grid[curX][curY] == 1 {
				queue = append(queue, curPos)
			}
			visit[curPos] = true
		}
	}
	return totalGround - canEscape
}

// @lc code=end
