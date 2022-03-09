package leetcode1996

import (
	"sort"
)

/*
 * @lc app=leetcode.cn id=1996 lang=golang
 *
 * [1996] 游戏中弱角色的数量
 */

// @lc code=start
func numberOfWeakCharacters(properties [][]int) int {
	// properties 按照攻击排序 然后最小堆 遍历 然后比堆顶大的不断出堆 这些都消费了一次 比堆顶小直接加入
	sort.Slice(properties, func(i, j int) bool {
		a, b := properties[i], properties[j]
		return a[0] < b[0] || a[0] == b[0] && a[1] > b[1] // 让攻击严格递增 相等的情况让大的防止前面 这样能在后面保证
	})

	st := []int{} // 单调递增栈 也就是说st[-1]是要最小的
	res := 0
	for _, item := range properties {
		for len(st) > 0 && st[len(st)-1] < item[1] {
			st = st[:len(st)-1]
			res++
		}
		st = append(st, item[1])
	}
	return res
}

// @lc code=end
