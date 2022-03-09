package leetcode

import "math"

// 格雷编码
// 就是0 ~ 2^n-1 这个范围重新排列使得相邻整数二进制表示恰好一位不同(第一个和最后一个同样)

// 第一个为0 然后迭代 选一个码 没有使用过 没有超出范围
// 异或 相同为0 不同为1
func grayCode(n int) []int {
	res := []int{0}
	vis := map[int]bool{0: true}
	maxVal := int(math.Pow(2, float64(n)) - 1)
	for i := 0; i < maxVal; i++ { // 已经有一个元素了
		cur := res[len(res)-1] // 四个字节位分别与1异或(0为1 1为0) 其他为与1(0还是0 1还是1)
		for j := 0; j < n; j++ {
			mask := 1 << j
			t := cur ^ mask
			if _, ok := vis[t]; ok {
				continue
			}
			res = append(res, t)
			vis[t] = true
			break
		}
	}
	return res
}

func grayCode2(n int) []int {
	ans := make([]int, 1, 1<<n)
	for i := 1; i <= n; i++ {
		for j := len(ans) - 1; j >= 0; j-- {
			ans = append(ans, ans[j]|1<<(i-1))
		}
	}
	return ans
}

func grayCode3(n int) []int {
	ans := make([]int, 1<<n)
	for i := range ans {
		ans[i] = i>>1 ^ i
	}
	return ans
}
