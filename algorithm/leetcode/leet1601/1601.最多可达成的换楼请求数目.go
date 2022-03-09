package leet1601

/*
 * @lc app=leetcode.cn id=1601 lang=golang
 *
 * [1601] 最多可达成的换楼请求数目
 */

// @lc code=start
type node struct {
	indegree  int
	outdegree int
}

func maximumRequests(n int, requests [][]int) int {
	// 记录每个节点分别的出度与入度
	// 求出 出度与入度的差值之和/2 就是不能满足的(因为这些导致净变化不为0)
	// 不过你不能确定直接删除掉那么多个数就能组成了，需要递归自己判断哪些进行组合

	// 递归回溯、递归的过程状态包括选与不选当前的元素
	// 需要维护0的个数，必须保证n栋楼变化为0，即0的个数=n
	// 使用delta一维数组来记录值，出度-1，入度+1，在计算前为0则0的个数-1
	// 在计算后为0则0的个数+1
	var ans int
	delta := make([]int, n)
	cnt, zero := 0, n // 选择的个数，0的个数
	var dfs func(pos int)
	dfs = func(pos int) {
		if pos == len(requests) {
			if zero == n && cnt > ans {
				ans = cnt
			}
			return
		}
		// 不选择当前
		dfs(pos + 1)
		// 选择当前
		cnt++
		z := zero
		x, y := requests[pos][0], requests[pos][1]
		switch delta[x] {
		case 0:
			zero--
		case 1:
			zero++
		}
		delta[x]--
		switch delta[y] {
		case 0:
			zero--
		case -1:
			zero++
		}
		delta[y]++
		dfs(pos + 1)
		// 回溯
		cnt--
		delta[x]++
		delta[y]--
		zero = z
	}
	dfs(0)
	return ans
}

// @lc code=end
