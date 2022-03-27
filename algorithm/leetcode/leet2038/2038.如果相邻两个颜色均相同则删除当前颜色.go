package leet2038

/*
 * @lc app=leetcode.cn id=2038 lang=golang
 *
 * [2038] 如果相邻两个颜色均相同则删除当前颜色
 */

// @lc code=start
func winnerOfGame(colors string) bool {
	allCnt := [2]int{} // a, b 的个数
	cur, cnt := 'C', 0 // 状态
	for _, ch := range colors {
		if ch != cur {
			cur, cnt = ch, 1
		} else {
			cnt++
			if cnt >= 3 {
				allCnt[ch-'A']++
			}
		}
	}
	return allCnt[0] > allCnt[1]
}

// @lc code=end
