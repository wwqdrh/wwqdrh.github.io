package leet2104

import (
	"container/heap"
	"sort"
)

/*
 * @lc app=leetcode.cn id=2104 lang=golang
 *
 * [2104] 子数组范围和
 */

// @lc code=start

func subArrayRanges2(nums []int) (ans int64) {
	for i, num := range nums {
		minVal, maxVal := num, num
		for _, v := range nums[i+1:] {
			if v < minVal {
				minVal = v
			} else if v > maxVal {
				maxVal = v
			}
			ans += int64(maxVal - minVal)
		}
	}
	return
}

func subArrayRanges(nums []int) int64 {
	var res int64
	n := len(nums)

	for i := 0; i < n; i++ {
		min, max := new(minHeap), new(maxHeap)
		for j := i; j < n; j++ {
			heap.Push(min, nums[j])
			heap.Push(max, -nums[j])
			res += int64(-max.IntSlice[0] - min.IntSlice[0])
		}
	}
	return res
}

type minHeap struct {
	sort.IntSlice
}
type maxHeap struct {
	sort.IntSlice
}

func (h *minHeap) Push(val interface{}) { h.IntSlice = append(h.IntSlice, val.(int)) }
func (h *minHeap) Pop() interface{} {
	res := h.IntSlice[len(h.IntSlice)-1]
	h.IntSlice = h.IntSlice[:len(h.IntSlice)-1]
	return res
}
func (h *maxHeap) Push(val interface{}) { h.IntSlice = append(h.IntSlice, val.(int)) }
func (h *maxHeap) Pop() interface{} {
	res := h.IntSlice[len(h.IntSlice)-1]
	h.IntSlice = h.IntSlice[:len(h.IntSlice)-1]
	return res
}

// @lc code=end
