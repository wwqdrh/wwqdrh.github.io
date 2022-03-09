package leetcode

/*
 * @lc app=leetcode.cn id=2029 lang=golang
 *
 * [2029] 石子游戏 IX
 */

// @lc code=start
// 博弈 动态规划 0 Alice 1 Bob 状态太多 简化状态分类讨论
// 石头的价值对于总数被3整除的意义在于每一个的余数，0，1，2因此石头的种类能够简化到3种
// - 0的可以用作换手
// - 最佳的拿去流程 1121212... 221212121...
// 1、alice先走赢的情况:
// - 1和2至少有一个(alice可以根据当前的数量最优的选1或2) 0为偶数
// - (类型1比类型2多两个以上,反过来也一样，这里bob获胜不是因为石头拿完了) 0为奇数 (可以换一次手)
func stoneGameIX(stones []int) bool {
	cnt1, cnt2, cnt3 := 0, 0, 0
	for _, item := range stones {
		t := item % 3
		switch t {
		case 0:
			cnt1++
		case 1:
			cnt2++
		case 2:
			cnt3++
		}
	}

	if cnt1%2 == 0 {
		return cnt2 >= 1 && cnt3 >= 1
	}
	return cnt2-cnt3 > 2 || cnt3-cnt2 > 2
}

// @lc code=end
