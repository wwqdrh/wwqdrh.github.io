package leet187

/*
 * @lc app=leetcode.cn id=187 lang=golang
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
var hashRela = map[byte]int{
	'A': 0,
	'C': 1,
	'G': 2,
	'T': 3,
}

func findRepeatedDnaSequences(s string) []string {
	cnt := map[int]int{} // 记录遍历过的元素, 等于2的时候才把相关的加入到结果集中，避免重复添加
	res := []string{}
	if len(s) < 10 {
		return res
	}

	// 初始10个哈希值
	curHash := 0
	for i := 0; i < 9; i++ {
		curHash = (curHash << 2) | hashRela[s[i]]
	}
	for i := 9; i < len(s); i++ {
		curHash = ((curHash << 2) | hashRela[s[i]]) & ((1 << 20) - 1)
		cnt[curHash]++
		if cnt[curHash] == 2 {
			res = append(res, s[i-9:i+1])
		}
	}
	return res
}

// @lc code=end
