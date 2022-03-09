package leetcode

import "sort"

////////////////////
// 一个整型数组 排列组合
////////////////////

// 1、dfs f(i) 不对
// 2、贪心，数组长度与目标长度是否是倍数，记录cnt个数，遍历数组
// 判读计数中是否满足所需要的个数
func isNStraightHand(hand []int, groupSize int) bool {
	if len(hand)%groupSize != 0 {
		return false
	}

	sort.Ints(hand)
	cnt := map[int]int{}
	for _, item := range hand {
		cnt[item]++
	}

	for _, item := range hand {
		if cnt[item] == 0 {
			continue
		}

		for num := item; num < item+groupSize; num++ {
			if cnt[num] == 0 {
				return false
			}
			cnt[num]--
		}
	}
	return true
}
