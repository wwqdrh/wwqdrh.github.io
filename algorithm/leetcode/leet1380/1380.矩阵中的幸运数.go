package leet1380

/*
 * @lc app=leetcode.cn id=1380 lang=golang
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
func luckyNumbers(matrix [][]int) []int {
	if len(matrix) == 0 {
		return []int{}
	}
	// 矩阵中返回同一行中最小的元素 同一列中最大的元素
	rowMin := map[int]int{} // 行 => 最小元素
	colMax := map[int]int{} // 列 => 最大元素

	max := make([]int, len(matrix[0]))
	for i, row := range matrix {
		min := 1<<63 - 1
		for j, item := range row {
			if item < min {
				min = item
			}
			if item > max[j] {
				max[j] = item
			}
		}
		rowMin[i] = min
	}
	for i, item := range max {
		colMax[i] = item
	}

	// 遍历判断是否是幸运数
	res := []int{}
	for i, row := range matrix {
		for j, item := range row {
			if item == rowMin[i] && item == colMax[j] {
				res = append(res, item)
			}
		}
	}
	return res
}

// @lc code=end
