package leet691

/*
 * @lc app=leetcode.cn id=691 lang=golang
 *
 * [691] 贴纸拼词
 */

// @lc code=start
func minStickers(stickers []string, target string) int {
	m := len(target)       // target的长度，由于构造2^m子序列
	f := make([]int, 1<<m) // dp, f[i]表示i状态下所需要的最少贴纸数
	for i := range f {
		f[i] = -1
	}
	f[0] = 0

	var dp func(int) int
	dp = func(mask int) int {
		if f[mask] != -1 {
			return f[mask]
		}

		f[mask] = m + 1 // 默认的数量大于m，如果未找到最后会返回m+1
		for _, sticker := range stickers {
			left := mask // 剩下的元素，继续dp

			// 记录当前sticker的元素个数
			cnt := [26]int{}
			for _, c := range sticker {
				cnt[c-'a']++
			}
			for i, c := range target {
				if mask>>i&1 == 1 && cnt[c-'a'] > 0 {
					// 判断最低位、是否选择
					cnt[c-'a']--
					left ^= 1 << i // 异或, 1<<i这个位置，原来是1->0(这里一定是1，因为由mask决定的，mask>>i&1为1才会进来)
				}
			}

			// left变成了减去ticker的元素
			if left < mask {
				f[mask] = min(f[mask], dp(left)+1)
			}
		}
		return f[mask]
	}
	ans := dp(1<<m - 1) // 1<<m - 1表示状态位上的所有元素都选择了
	if ans <= m {
		return ans
	}
	// 如果返回的m+1(dp函数里面定义的)，说明没有找到能够组成target的sticker，返回-1
	return -1
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

// @lc code=end
