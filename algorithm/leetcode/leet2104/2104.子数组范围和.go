package leet2104

/*
 * @lc app=leetcode.cn id=2104 lang=golang
 *
 * [2104] 子数组范围和
 */

// @lc code=start
func subArrayRanges(nums []int) int {
	n := len(nums)
	min, max := getCnt(nums, true), getCnt(nums, false)
	res := 0
	for i := 0; i < n; i++ {
		res += (max[i] - min[i]) * nums[i]
	}
	return res
}

// 获取左边最近最小的个数 右边最近最小的个数
// 使用单调栈记录最小元素
func getCnt(num []int, isMin bool) []int {
	n := len(num)
	left, right := make([]int, n), make([]int, n)

	stack := []int{} // 单调栈
	// 计算左边
	for i := 0; i < n; i++ {
		for len(stack) > 0 {
			if isMin && num[stack[len(stack)-1]] >= num[i] {
				// 记录最小值的索引，将大于它的弹出去
				stack = stack[:len(stack)-1]
			} else if !isMin && num[stack[len(stack)-1]] <= num[i] {
				stack = stack[:len(stack)-1]
			} else {
				break
			}
		}
		idx := -1
		if len(stack) != 0 {
			idx = stack[len(stack)-1]
		}
		left[i] = idx
		stack = append(stack, i)
	}

	// 计算右边
	stack = stack[:0]
	for i := n - 1; i >= 0; i-- {
		for len(stack) > 0 {
			if isMin && num[stack[len(stack)-1]] >= num[i] {
				// 记录最小值的索引，将大于它的弹出去
				stack = stack[:len(stack)-1]
			} else if !isMin && num[stack[len(stack)-1]] <= num[i] {
				stack = stack[:len(stack)-1]
			} else {
				break
			}
		}
		idx := -1
		if len(stack) != 0 {
			idx = stack[len(stack)-1]
		}
		right[i] = idx
		stack = append(stack, i)
	}

	// 计算
	res := make([]int, n)
	for i := 0; i < n; i++ {
		res[i] = (i - left[i]) * (right[i] - i)
	}
	return res
}

// @lc code=end
