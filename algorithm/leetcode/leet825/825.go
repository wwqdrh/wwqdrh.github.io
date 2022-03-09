package leetcode

import "sort"

// ages 范围 2*10^4  n^2的复杂度超时了
// x要比y大 但是不能大太多
func numFriendRequests(ages []int) int {
	sort.Slice(ages, func(i, j int) bool { return ages[i] < ages[j] })
	length := len(ages)
	res := 0
	for i := 0; i < length; i++ {
		for j := i + 1; j < length; j++ {
			y, x := ages[i], ages[j]
			if float64(x)*0.5+7 >= float64(y) {
				break
			}

			if x == y {
				res += 2
			} else {
				res++
			}
		}
	}
	return res
}

// status: ok
// 排序+双指针 排序后为left找区间中哪些元素满足规则 然后不断累加就是结果
// 查看题目可知 需要x大于y 并且不能大太多了
func numFriendRequests2(ages []int) int {
	ans := 0
	sort.Ints(ages)
	length := len(ages)
	left, right := 0, 0 // ages[left]=y ages[right]=x
	for _, age := range ages {
		if age < 15 {
			// 如果目标是小于15的是找不到合适的要发送的
			// 可以根据下面的等式知道 只要这样就永远比他小
			continue
		}

		for ages[left]*2 <= age+14 {
			left++ // 左边的不能小太多了
		} // 简单的等式变换

		for right+1 < length && ages[right+1] <= age {
			// 右边的不能超过边界 也不能大于age
			right++
		}
		ans += right - left // 这段部分就是age能够发送的区间部分
	}
	return ans
}
