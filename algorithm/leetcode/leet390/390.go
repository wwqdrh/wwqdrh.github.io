package leetcode

// 列表 arr 由在范围 [1, n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：

// 从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。
// 重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。
// 不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
// 给你整数 n ，返回 arr 最后剩下的数字。

// 约瑟夫环的变种 主要分析递归， 考虑最后剩下的那个元素它的索引在递归情况下的变化情况
func lastRemaining(n int) int {
	// f(k) = f(k/2) * 2 + 1
	// 从左往右是删偶数索引 从右往左是删奇数索引
	// 从左往右: 如果是奇数 原来的索引乘以2+1 如果是偶数 直接乘以2+1
	// 从右往左: 如果是奇数 原来的乘以2+1 如果是偶数 直接乘以2
	if n <= 0 {
		return 0
	}
	// 如果使用迭代需要知道最底层的方向 通过2的几次方的奇偶性来判断，麻烦还不如直接递归
	var f func(k int, flag bool) int // 当前的总数以及方向 flag=true表示从右往左
	f = func(k int, flag bool) int {
		if k == 1 {
			return 0
		}
		if flag && k&1 == 0 {
			return f(k/2, !flag) * 2
		}
		return f(k/2, !flag)*2 + 1
	}
	return f(n, false) + 1
}

// 常规约瑟夫环 递归/迭代
func cir(n, m int) int {
	res := 0
	for i := 2; i <= n; i++ {
		res = (res + m) % n
	}
	return res + 1
}
