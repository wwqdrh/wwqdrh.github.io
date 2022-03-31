package leet1606

import (
	"container/heap"
	"sort"
)

/*
 * @lc app=leetcode.cn id=1606 lang=golang
 *
 * [1606] 找到处理最多请求的服务器
 */

// @lc code=start

type (
	hp []pair

	// busy优先队列
	pair struct {
		end, id int
	}

	// avaliable队列
	hi struct {
		sort.IntSlice
	}
)

func (h hp) Len() int              { return len(h) }
func (h hp) Less(i, j int) bool    { return h[i].end < h[j].end }
func (h hp) Swap(i, j int)         { h[i], h[j] = h[j], h[i] }
func (h *hp) Push(val interface{}) { *h = append(*h, val.(pair)) }
func (h *hp) Pop() interface{} {
	t := *h
	res := t[len(t)-1]
	*h = t[:len(t)-1]
	return res
}

func (h *hi) Push(val interface{}) { h.IntSlice = append(h.IntSlice, val.(int)) }
func (h *hi) Pop() interface{} {
	t := h.IntSlice
	res := t[len(t)-1]
	h.IntSlice = t[:len(t)-1]
	return res
}

type s struct {
	total int // 请求数，不是总时间
	free  int // 不繁忙时的时间戳
}

func busiestServers(k int, arrival []int, load []int) []int {
	avaliable := hi{make([]int, k)}
	for i := 0; i < k; i++ {
		avaliable.IntSlice[i] = i // 0 1 2 3...
	}
	busy := hp{}

	ans := []int{}
	requests := make([]int, k) // 各个服务器的计数
	maxRequest := 0
	for i, start := range arrival {
		for len(busy) > 0 && busy[0].end <= start {
			// 优先取大于i%k的最小值 然后取大于0的最小值
			// 由于外部取不好执行前面这一步(除非二分，但是堆又不支持二分) 所以在这里处理了
			// heap.Push(&avaliable, busy[0].id)
			heap.Push(&avaliable, i+((busy[0].id-i)%k+k)%k)
			heap.Pop(&busy)
		}
		if avaliable.Len() == 0 {
			continue
		}

		id := heap.Pop(&avaliable).(int) % k // 最小的id
		requests[id]++
		if requests[id] > maxRequest {
			maxRequest = requests[id]
			ans = []int{id}
		} else if requests[id] == maxRequest {
			ans = append(ans, id)
		}
		heap.Push(&busy, pair{start + load[i], id}) // 添加到busy中
	}
	return ans
}

// @lc code=end
