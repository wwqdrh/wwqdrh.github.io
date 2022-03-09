package leet969

/*
 * @lc app=leetcode.cn id=969 lang=golang
 *
 * [969] 煎饼排序
 */

// @lc code=start
func pancakeSort(arr []int) []int {
	// 数组 煎饼翻转 每次只能翻转前n个 让结果有序
	res := []int{}
	for n := len(arr); n > 1; n-- {
		index := 0 // 寻找前n个最大值，将其移到末尾
		for i := 0; i < n; i++ {
			if arr[i] > arr[index] {
				index = i
			}
		}
		// 当前n个元素，最后一个元素已经是最大值了，那么这一趟就不需要再遍历了
		if index == n-1 {
			continue
		}

		for i := 0; i < (index+1)/2; i++ {
			arr[i], arr[index-i] = arr[index-i], arr[i]
		}
		for i := 0; i < n/2; i++ {
			arr[i], arr[n-1-i] = arr[n-1-i], arr[i]
		}
		res = append(res, index+1, n) // 存储长度
	}
	return res
}

// @lc code=end
