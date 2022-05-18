package leet1728

/*
 * @lc app=leetcode.cn id=1728 lang=golang
 *
 * [1728] 猫和老鼠 II
 */

// @lc code=start
// TODO 没通过测试用例 但是感觉思路没有问题 后续再处理细节
const (
	draw     = 0 // 平局
	mouseWin = 1 // 老鼠赢
	catWin   = 2 // 猫赢
)

func canMouseWin(grid []string, catJump int, mouseJump int) bool {
	// 需要将原始grid转为一维的作为node的唯一标识 列长*(i-1)+j， 找到老鼠和猫的开始节点
	n := len(grid) * len(grid[0])
	targetID := 0
	for i, item := range grid {
		for j, ch := range item {
			if ch == 'F' {
				targetID = i*len(grid[0]) + j
			}
		}
	}
	catTable, catId := buildTable(grid, catJump, 'C')
	mouseTable, mouseId := buildTable(grid, mouseJump, 'M')

	// 构造必胜状态 dp[i][j][k] 表示猫在i老鼠在j当前谁出 的必胜状态
	dp := make([][][]int, n)
	for i := range dp {
		dp[i] = make([][]int, n)
		for j := range dp[i] {
			dp[i][j] = make([]int, n*2)
			for k := range dp[i][j] {
				dp[i][j][k] = -1
			}
		}
	}

	var getResult, getNextResult func(int, int, int) int
	getResult = func(mouse, cat, turns int) int {
		if turns == n*2 {
			return draw
		}
		res := dp[mouse][cat][turns]
		if res != -1 {
			return res
		}
		if mouse == targetID {
			res = mouseWin
		} else if cat == mouse || cat == targetID {
			res = catWin
		} else {
			res = getNextResult(mouse, cat, turns)
		}
		dp[mouse][cat][turns] = res
		return res
	}
	getNextResult = func(mouse, cat, turns int) int {
		curMove, defaultRes, graph := mouse, catWin, mouseTable // 老鼠先移动
		if turns%2 == 1 {
			curMove = cat
			defaultRes = mouseWin
			graph = catTable
		}

		res := defaultRes
		for next := range graph[curMove] {
			if curMove == cat && next == targetID {
				// 猫到了食物位置
				res = catWin
				// break
			}
			if curMove == mouse && next == targetID {
				res = mouseWin
				// break
			}
			nextMouse, nextCat := mouse, cat
			if curMove == mouse {
				nextMouse = next
			} else if curMove == cat {
				nextCat = next
			}
			nextRes := getResult(nextMouse, nextCat, turns+1)
			if nextRes != defaultRes {
				res = nextRes
				if res != draw {
					break
				}
			}
		}
		return res
	}
	res := getResult(mouseId, catId, 0)
	return res == 1
}

// 邻接表 目标值的节点id
func buildTable(grid []string, step int, target byte) ([]map[int]bool, int) {
	// 构造邻接表
	rows, cols := len(grid), len(grid[0])
	graphTable := make([]map[int]bool, rows*cols) // 猫的邻接表
	for i := range graphTable {
		graphTable[i] = map[int]bool{}
	}
	targetID := -1
	getIdx := func(i, j int) int { return i*cols + j }
	// 有可能不动 可以跳小于step的所有步骤
	directions := [][2]int{{0, 0}}
	for i := 1; i <= step; i++ {
		directions = append(directions, [2]int{0, i}, [2]int{0, -i}, [2]int{i, 0}, [2]int{-i, 0})
	}
	isok := func(i, j int) bool {
		return i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] != '#'
	}

	for i, line := range grid {
		for j, ch := range line {
			if ch == '#' {
				continue // 墙 无法通行
			} else if ch == '.' {
				// 如果在这个位置可以上下左右跳的步骤
				for _, dire := range directions {
					ni, nj := i+dire[0], j+dire[1]
					if !isok(ni, nj) {
						continue
					}
					cur, next := getIdx(i, j), getIdx(ni, nj)
					graphTable[cur][next] = true
					graphTable[next][cur] = true
				}
			} else if ch == rune(target) {
				targetID = getIdx(i, j)
			}
		}
	}
	return graphTable, targetID
}

// @lc code=end
