package leetcode

import (
	"container/heap"
)

/*
 * @lc app=leetcode.cn id=2034 lang=golang
 *
 * [2034] 股票价格波动
 */

// @lc code=start
type StockPrice struct {
	maxPrice, minPrice *pairHp
	mapping            map[int]int
	maxTimestamp       int
}

type pairHp []pair
type pair struct {
	price, timestamp int
}

func (h pairHp) Len() int              { return len(h) }
func (h pairHp) Less(i, j int) bool    { return h[i].price < h[j].price }
func (h pairHp) Swap(i, j int)         { h[i], h[j] = h[j], h[i] }
func (h *pairHp) Push(val interface{}) { *h = append(*h, val.(pair)) }
func (h *pairHp) Pop() interface{} {
	t := *h
	res := t[len(t)-1]
	*h = t[:len(t)-1]
	return res
}

func (this *StockPrice) Update(timestamp int, price int) {
	heap.Push(this.maxPrice, pair{price: -price, timestamp: timestamp})
	heap.Push(this.minPrice, pair{price: price, timestamp: timestamp})

	if timestamp > this.maxTimestamp {
		this.maxTimestamp = timestamp
	}
	this.mapping[timestamp] = price
}

func (this *StockPrice) Current() int {
	return this.mapping[this.maxTimestamp]
}

func (this *StockPrice) Maximum() int {
	for {
		if p := this.maxPrice[0]; -p.price == this.mapping[p.timestamp] {
			return -p.price
		}
		heap.Pop(this.maxPrice)
	}
}

func (this *StockPrice) Minimum() int {
	for {
		if p := this.minPrice[0]; p.price == this.mapping[p.timestamp] {
			return p.price
		}
		heap.Pop(this.minPrice)
	}
}

func Constructor() StockPrice {
	return StockPrice{
		maxPrice:     new(pairHp),
		minPrice:     new(pairHp),
		maxTimestamp: 0,
		mapping:      map[int]int{},
	}
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Update(timestamp,price);
 * param_2 := obj.Current();
 * param_3 := obj.Maximum();
 * param_4 := obj.Minimum();
 */
// @lc code=end
