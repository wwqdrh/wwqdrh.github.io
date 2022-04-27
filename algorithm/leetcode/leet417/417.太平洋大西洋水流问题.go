package leet417

/*
 * @lc app=leetcode.cn id=417 lang=golang
 *
 * [417] 太平洋大西洋水流问题
 * 多源广度搜索
 */

// @lc code=start
type pos struct {
	m, n int
}

var directions = [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

func pacificAtlantic(heights [][]int) (res [][]int) {
	// 如果一个陆地两块海域都能留到 那么就加入到结果中
	// BFS反向搜索
	if len(heights) == 0 {
		return nil
	}
	m, n := len(heights), len(heights[0]) // m行n列
	var flag1, flag2 map[pos]bool
	{
		q1, q2 := []pos{}, []pos{}
		for i := 0; i < n; i++ {
			q1 = append(q1, pos{0, i})
			q2 = append(q2, pos{m - 1, i})
		}
		for i := 0; i < m; i++ {
			q1 = append(q1, pos{i, 0})
			q2 = append(q2, pos{i, n - 1})
		}
		flag1 = bfssearch(q1, heights)
		flag2 = bfssearch(q2, heights)
	}
	for item := range flag2 {
		if _, ok := flag1[item]; ok {
			res = append(res, []int{item.m, item.n})
		}
	}
	return
}

func bfssearch(q []pos, grid [][]int) map[pos]bool {
	m, n := len(grid), len(grid[0]) // m行n列
	flag := map[pos]bool{}          // 当两个海域都能访问到就加入到res中
	for _, item := range q {
		flag[item] = true
	}
	visit := map[pos]bool{}
	for len(q) > 0 {
		cur := q[0]
		q = q[1:]

		for _, dire := range directions {
			nx, ny := cur.m+dire[0], cur.n+dire[1]
			if nx < 0 || nx >= m || ny < 0 || ny >= n || visit[pos{nx, ny}] {
				continue
			}

			if grid[nx][ny] >= grid[cur.m][cur.n] {
				t := pos{nx, ny}
				q = append(q, t)
				flag[t] = true
				visit[t] = true
			}
		}
	}
	return flag
}

// @lc code=end
