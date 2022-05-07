package leet433

/*
 * @lc app=leetcode.cn id=433 lang=golang
 *
 * [433] 最小基因变化
 */

// @lc code=start

// 广度优先 bank相当于能走的分支 找到最短的变化路径
// 状态压缩 8个字符 每个字符4种 8*4=32 位状态压缩
// 可能的变化计算: i & 0b1111 或者 i & 0b11110000 ....
// 发现使用这种状态压缩 位运算很复杂，还不如直接计算可能的字符串
// 使用邻接表根据bank来预处理优化，这样就不需要每次都处理很多次

// AACCGGTT

// 判断两个字符串是不是只有一个位置不同
func diffOne(s, t string) (diff bool) {
	for i := range s {
		if s[i] != t[i] {
			if diff {
				return false
			}
			diff = true
		}
	}
	return
}

func minMutation(start string, end string, bank []string) int {
	if start == end {
		return 0
	}

	// 预处理优化
	m := len(bank)
	adj := make([][]int, m) // 下标i,j之间如果能连通就会加入进来 邻接表
	endIndex := -1
	for i, s := range bank {
		if s == end {
			endIndex = i
		}
		for j := i + 1; j < m; j++ {
			if diffOne(s, bank[j]) {
				adj[i] = append(adj[i], j)
				adj[j] = append(adj[j], i)
			}
		}
	}
	if endIndex == -1 {
		return -1 // 说明目标序列不是合法的 直接返回-1
	}

	// bfs
	var q []int
	vis := make([]bool, m)
	for i, s := range bank {
		if diffOne(start, s) {
			q = append(q, i)
			vis[i] = true
		}
	}
	for step := 1; q != nil; step++ {
		tmp := q
		q = nil
		for _, cur := range tmp {
			if cur == endIndex {
				return step
			}
			for _, nxt := range adj[cur] {
				if !vis[nxt] {
					vis[nxt] = true
					q = append(q, nxt)
				}
			}
		}
	}
	return -1
}

// @lc code=end
