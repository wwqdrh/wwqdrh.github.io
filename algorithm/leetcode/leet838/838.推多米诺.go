package leet838

/*
 * @lc app=leetcode.cn id=838 lang=golang
 *
 * [838] 推多米诺
 */

// @lc code=start
func pushDominoes(dominoes string) string {
	// 模拟 边界情况: 左边界往左 右边界往右 只需要不断遍历处理连续的...元素，判断左右元素的翻转方向
	data := []byte(dominoes)
	i, n := 0, len(dominoes)
	left := byte('L')
	for i < n {
		j := i
		for j < n && data[j] == '.' {
			j++
		}
		right := byte('R') // 右边界情况
		if j < n {
			right = data[j]
		}

		// 判断元素两边的情况
		if left == right {
			for i < j {
				data[i] = left
				i++
			}
		} else if left == 'R' && right == 'L' {
			k := j - 1
			for i < k {
				data[i] = 'R'
				data[k] = 'L'
				i++
				k--
			}
		}
		left = right
		i = j + 1
	}
	return string(data)
}

// @lc code=end
