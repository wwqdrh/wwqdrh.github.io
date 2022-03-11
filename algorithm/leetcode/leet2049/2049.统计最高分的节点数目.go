package leet2049

/*
 * @lc app=leetcode.cn id=2049 lang=golang
 *
 * [2049] 统计最高分的节点数目
 */

// @lc code=start

func countHighestScoreNodes(parents []int) (ans int) {
	// 父->子
	// 需要注意0是根节点，parents[0] = -1, 避开选择
	childMapping := make([][]int, len(parents))
	for i := 1; i < len(parents); i++ {
		val := parents[i]
		childMapping[val] = append(childMapping[val], i)
	}

	total := len(parents)
	maxVal := 0
	// dfs 深度优先构造树的节点情况
	var dfs func(int) int // 当前父节点
	dfs = func(cur int) int {
		score, size := 1, total-1
		for _, item := range childMapping[cur] {
			v := dfs(item)
			score *= v
			size -= v
		}
		if cur > 0 {
			score *= size
		}

		if score > maxVal {
			maxVal = score
			ans = 1
		} else if score == maxVal {
			ans += 1
		}

		return len(parents) - size
	}
	dfs(0)
	return
}

// @lc code=end
