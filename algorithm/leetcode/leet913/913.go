package leetcode

// 有向无环图 路径问题 如果某个状态是存在过的那么就是平局
// 并假设两位玩家都都以最佳状态参与游戏(
// 1、老鼠不会走到与猫直接连接的地方 有洞直接进洞
// 2、猫的最佳方案就是去与老鼠直接连接的地方
// 3、猫不能让老鼠走到直接与0相连的位置 也就是有这个位置的地方需要堵着
// )
// 文中说了最优状态，其实就是博弈的题

// 自底向上则是使用拓扑排序或者bfs填充所有的状态获取结果
// dp[0][j][k] 都是mouseWin 然后拓扑排序找到所有连接的节点其对应的状态也是mouseWin
// dp[i][j][k] 当i==j的时候就是必输的状态 然后拓扑排序找到连接节点对应的状态都是catWin
// 其他都是平局
const (
	draw     = 0
	mouseWin = 1
	catWin   = 2
)

func catMouseGame(graph [][]int) int {
	n := len(graph)
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
		if mouse == 0 {
			res = mouseWin
		} else if cat == mouse {
			res = catWin
		} else {
			res = getNextResult(mouse, cat, turns)
		}
		dp[mouse][cat][turns] = res
		return res
	}
	getNextResult = func(mouse, cat, turns int) int {
		curMove := mouse
		if turns%2 == 1 {
			curMove = cat
		}
		defaultRes := mouseWin
		if curMove == mouse {
			defaultRes = catWin
		}
		res := defaultRes
		for _, next := range graph[curMove] {
			if curMove == cat && next == 0 {
				continue
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
	return getResult(1, 2, 0)
}
