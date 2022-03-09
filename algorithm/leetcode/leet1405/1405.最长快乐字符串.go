package leet1405

import "sort"

/*
 * @lc app=leetcode.cn id=1405 lang=golang
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
func longestDiverseString(a int, b int, c int) string {
	ans := []byte{}
	cnt := []struct {
		c  int
		ch byte
	}{{a, 'a'}, {b, 'b'}, {c, 'c'}}
	for {
		sort.Slice(cnt, func(i, j int) bool { return cnt[i].c > cnt[j].c })
		hasNext := false
		for i, item := range cnt {
			if item.c <= 0 {
				break
			}
			m := len(ans)
			if m >= 2 && ans[m-2] == item.ch && ans[m-1] == item.ch {
				continue
			}
			hasNext = true
			ans = append(ans, item.ch)
			cnt[i].c--
			break
		}
		if !hasNext {
			return string(ans)
		}
	}
}

// @lc code=end
