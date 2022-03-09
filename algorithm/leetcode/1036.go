package leetcode

import "sort"

// 二维数组 大小确定10^6 x 10^6
// 从a坐标走到b坐标 上下左右四个方向 有些位置不能走 同时不能走到外面去 问是否存在一条路径满足规则
// dfs 但是肯定会超过栈深度（out of memory）
// 1、改为迭代? 使用bfs搜索?
// 2、贪心 分析起点和终点 以及所有的block 什么情况下无法通过 存在一条线将两个点分开
func isEscapePossible(blocked [][]int, source []int, target []int) bool {
	blockMapping := map[[2]int]bool{} // 记录blocked

	for _, block := range blocked {
		blockMapping[[2]int{block[0], block[1]}] = true
	}

	maxDep := int(10e6)
	directions := [][2]int{{0, -1}, {0, 1}, {1, 0}, {-1, 0}}
	memory := map[[2]int]bool{} // 记忆化搜索
	var dfs func(x, y int) bool
	dfs = func(x, y int) bool {
		if x == target[0] && y == target[1] {
			return true
		}
		for _, dire := range directions {
			curX, curY := x+dire[0], y+dire[1]
			if curX < 0 || curX > maxDep || curY < 0 || curY > maxDep {
				continue
			}
			if _, ok := blockMapping[[2]int{curX, curY}]; ok {
				continue // 不能走
			}
			if val, ok := memory[[2]int{curX, curY}]; ok {
				return val
			}

			r := dfs(curX, curY)
			memory[[2]int{curX, curY}] = r
			if r {
				return true // 返回
			}
		}

		return false
	}
	return dfs(source[0], source[1])
}

// 有限步数的bfs，判断a被包围并且b不在范围中，或者b被包围a不在范围中两点就无法相遇
// n个点最大能组成 (n-1)*n/2个非阻塞点(利用两边) 当bfs搜寻到这个数量还没结束说明没有被包围
func isEscapePossible2(blocked [][]int, source []int, target []int) bool {
	blockA, blockB := true, true
	// 以source为起点进行搜寻
	var flag int
	flag = bfs(blocked, source, target)
	switch flag {
	case 0:
		return true
	case 1:
		blockA = false
	case 2:
		return false
	}

	flag = bfs(blocked, target, source)
	switch flag {
	case 0:
		return true
	case 1:
		blockB = false
	case 2:
		return false
	}

	if !blockA && !blockB {
		return true
	}

	return false
}

// 返回true 没有被包围
// 0 搜索成功
// 1 没有被包围但是没有搜索到目标
// 2 被包围没有搜索到目标
func bfs(blocked [][]int, source []int, target []int) int {
	maxGap := len(blocked) * (len(blocked) - 1) / 2
	directions := [][]int{{0, 1}, {0, -1}, {-1, 0}, {1, 0}}
	blockedMap := map[[2]int]bool{}
	for _, item := range blocked {
		blockedMap[[2]int{item[0], item[1]}] = true
	}
	maxLen := int(1e6)
	queue := [][]int{source}
	length := 0
	visit := map[[2]int]bool{{source[0], source[1]}: true}
	for len(queue) > 0 {
		length += len(queue)
		if length > maxGap {
			return 1
		}
		for idx := len(queue) - 1; idx >= 0; idx-- {
			cur := queue[0]
			queue = queue[1:]
			for _, dire := range directions {
				nextX, nextY := cur[0]+dire[0], cur[1]+dire[1]
				nextPos := [2]int{nextX, nextY}
				if nextX < 0 || nextX >= maxLen || nextY < 0 || nextY >= maxLen {
					continue
				}

				// 如果搜索到了
				if nextX == target[0] && nextY == target[1] {
					return 1
				}
				// 如果是被阻塞的不要
				if _, ok := blockedMap[nextPos]; ok {
					continue
				}

				// 没有访问的就加入队列
				if _, ok := visit[nextPos]; !ok {
					visit[nextPos] = true
					queue = append(queue, []int{nextX, nextY})
				}
			}
		}
	}
	return 2
}

// 离散化，构造新的grid
// 我们将行坐标进行升序排序；
// 将上边界离散化为 -1−1。上边界是排序后的第 00 个行坐标；

// 如果排序后的第 ii 个行坐标与第 i-1i−1 个行坐标相同，那么它们离散化之后的值也相同；

// 如果排序后的第 ii 个行坐标与第 i-1i−1 个行坐标相差 11，那么它们离散化之后的值也相差 11；

// 如果排序后的第 ii 个行坐标与第 i-1i−1 个行坐标相差超过 11，那么它们离散化之后的值相差 22
// 如果本身相邻则散列化后也要相邻，如果本身有超过多行的散列化为1行，也就是行坐标差2
type posPair struct{ x, y int }

var dirs = []posPair{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

// 离散化 a，返回的哈希表中的键值对分别为 a 中的原始值及其离散化后的对应值
func discrete(a []int) (map[int]int, int) {
	sort.Ints(a)

	id := 0
	if a[0] > 0 {
		id = 1
	}
	mapping := map[int]int{a[0]: id}
	pre := a[0]
	for _, v := range a[1:] {
		if v != pre {
			if v == pre+1 {
				id++
			} else {
				id += 2
			}
			mapping[v] = id
			pre = v
		}
	}

	const boundary int = 1e6
	if a[len(a)-1] != boundary-1 {
		id++
	}

	return mapping, id
}

func isEscapePossible3(block [][]int, source, target []int) bool {
	n := len(block)
	if n < 2 {
		return true
	}
	rows := []int{source[0], target[0]}
	cols := []int{source[1], target[1]}
	for _, b := range block {
		rows = append(rows, b[0])
		cols = append(cols, b[1])
	}

	// 离散化行列坐标
	rMapping, rBound := discrete(rows)
	cMapping, cBound := discrete(cols)

	grid := make([][]bool, rBound+1)
	for i := range grid {
		grid[i] = make([]bool, cBound+1)
	}
	for _, b := range block {
		grid[rMapping[b[0]]][cMapping[b[1]]] = true
	}

	sx, sy := rMapping[source[0]], cMapping[source[1]]
	tx, ty := rMapping[target[0]], cMapping[target[1]]
	grid[sx][sy] = true
	q := []posPair{{sx, sy}}
	for len(q) > 0 {
		p := q[0]
		q = q[1:]
		for _, d := range dirs {
			x, y := p.x+d.x, p.y+d.y
			if 0 <= x && x <= rBound && 0 <= y && y <= cBound && !grid[x][y] {
				if x == tx && y == ty {
					return true
				}
				grid[x][y] = true
				q = append(q, posPair{x, y})
			}
		}
	}
	return false
}
