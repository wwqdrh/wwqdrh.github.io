package leetcode

/*
 * @lc app=leetcode.cn id=1345 lang=golang
 *
 * [1345] 跳跃游戏 IV
 */

// @lc code=start

// bfs 存储元素各个对应的下标 bfs搜索最小路径
// 超出时间限制 主要的限制在于想要寻找下标的时候从pos里一个一个遍历(从最大的开始?)
func minJumps(arr []int) int {
	pos := map[int][]int{}
	for i, item := range arr {
		pos[item] = append(pos[item], i)
	}

	// bfs
	length := len(arr)
	q := []int{0}           // 存储下标
	visit := map[int]bool{} // 存储下标
	res := -1
	for len(q) > 0 {
		res++
		for l := len(q); l > 0; l-- {
			c := q[0]
			q = q[1:]
			if c == length-1 {
				return res
			}

			if c+1 < length && !visit[c+1] {
				visit[c+1] = true
				q = append(q, c+1)
			}
			if c-1 >= 0 && !visit[c-1] {
				visit[c-1] = true
				q = append(q, c-1)
			}
			for _, item := range pos[arr[c]] {
				if item != c && !visit[item] {
					visit[item] = true
					q = append(q, item)
				}
			}
			// 遍历完了就不再需要了
			delete(pos, arr[c])
		}
	}

	return -1
}

// @lc code=end
