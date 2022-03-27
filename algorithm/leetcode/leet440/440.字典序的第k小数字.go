package leet440

/*
 * @lc app=leetcode.cn id=440 lang=golang
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
func findKthNumber(n int, k int) int {
	cur := 1
	k--
	for k > 0 {
		steps := getSteps(cur, n)
		if steps <= k {
			k -= steps
			cur++
		} else {
			// 往下走一步 因为最终结果肯定在这个子树里面
			cur *= 10
			k--
		}
	}
	return cur
}

// cueVal当前的节点值，maxVal最大值
func getSteps(curVal, maxVal int) (steps int) {
	first, last := curVal, curVal // 没一层的左右两边的数字
	for first <= maxVal {
		steps += min(last, maxVal) - first + 1
		first *= 10
		last = last*10 + 9
	}
	return
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

// @lc code=end
