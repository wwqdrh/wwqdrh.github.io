package leet307

/*
 * @lc app=leetcode.cn id=307 lang=golang
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
type NumArray struct {
	nums, tree []int
}

func Constructor(nums []int) NumArray {
	tree := make([]int, len(nums)+1)
	na := NumArray{
		nums, tree,
	}
	for i, num := range nums {
		na.add(i+1, num)
	}
	return na
}

// 爬树 修改
func (this *NumArray) add(index, val int) {
	// lowbit index & -index, 求出最低位的1的位置(求出低位有多少个0)
	for ; index < len(this.tree); index += index & -index {
		this.tree[index] += val
	}
}

func (this *NumArray) prefixSum(index int) (sum int) {
	// index & (index - 1) , 求出低位有多少个1
	for ; index > 0; index &= index - 1 {
		sum += this.tree[index]
	}
	return
}

func (this *NumArray) Update(index int, val int) {
	this.add(index+1, val-this.nums[index])
	this.nums[index] = val
}

func (this *NumArray) SumRange(left int, right int) int {
	return this.prefixSum(right+1) - this.prefixSum(left)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * obj.Update(index,val);
 * param_2 := obj.SumRange(left,right);
 */
// @lc code=end
