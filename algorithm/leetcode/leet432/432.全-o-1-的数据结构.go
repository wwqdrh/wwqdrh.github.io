package leet432

/*
 * @lc app=leetcode.cn id=432 lang=golang
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start
type AllOne struct {
	mapping map[string]int
	bucket  []map[string]bool // 桶的索引 + 1 = 计数
}

func Constructor() AllOne {
	// 1、mapping+最大最小堆，但是最大最小堆的排序不是O(1)
	// 使用桶，修改了元素的计数值，就把对应的元素移动对应的桶中
	// 或者使用双向链表，在哈希表中存储双向链表的元素
	return AllOne{
		mapping: map[string]int{},
		bucket:  []map[string]bool{},
	}
}

func (this *AllOne) Inc(key string) {
	var num int
	if val, ok := this.mapping[key]; !ok {
		num = 1
	} else {
		num = val + 1
	}
	if num < len(this.bucket) {
		this.bucket = append(this.bucket, map[string]bool{})
	}

	if num >= 2 {
		delete(this.bucket[num-2], key)
	}
	this.bucket[num-1][key] = true
	this.mapping[key] = num
}

func (this *AllOne) Dec(key string) {
	var num int
	if val, ok := this.mapping[key]; !ok {
		return
	} else {
		num = val - 1
	}

	if num == 0 {
		delete(this.bucket[0], key)
		delete(this.mapping, key)
	} else if num >= 1 {
		delete(this.bucket[num], key)
		this.bucket[num-1][key] = true
		this.mapping[key] = num
	}
}

func (this *AllOne) GetMaxKey() string {
	for i := len(this.bucket) - 1; i >= 0; i-- {
		// 避免数字为空
		for key, _ := range this.bucket[i] {
			return key
		}
	}
	return ""
}

func (this *AllOne) GetMinKey() string {
	for i := 0; i < len(this.bucket); i++ {
		for key, _ := range this.bucket[i] {
			return key
		}
	}
	return ""
}

/**
 * Your AllOne object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Inc(key);
 * obj.Dec(key);
 * param_3 := obj.GetMaxKey();
 * param_4 := obj.GetMinKey();
 */
// @lc code=end
