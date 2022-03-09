package leetcode

import "sort"

// 给定一个不重复的字符串数组，在其中找到能由其他两个或以上元素组成的的值
// 其实就像一个变相的多元素相加等于目标值的问题
// 类似题目和为k的子数组: 连续的话就是 枚举、前缀和+哈希优化
// 解法1：字典树+深度优先搜索
// 解法2: 字符串哈希+序列DP
type trie struct {
	children [26]*trie
	isEnd    bool
}

func (root *trie) insert(word string) {
	node := root
	for _, ch := range word {
		ch -= 'a'
		if node.children[ch] == nil {
			node.children[ch] = &trie{}
		}
		node = node.children[ch]
	}
	node.isEnd = true
}

func (root *trie) dfs(word string) bool {
	if word == "" {
		return true
	}
	node := root
	for i, ch := range word {
		node = node.children[ch-'a']
		if node == nil {
			return false
		}
		if node.isEnd && root.dfs(word[i+1:]) {
			return true
		}
	}
	return false
}

// 字典树+深度优先搜索 构造好字典树之后，判断字符串，node.isEnd && root.dfs(word[i+1:]) 当前是一个节点，剩余的也能构成就可以
func findAllConcatenatedWordsInADict(words []string) (ans []string) {
	sort.Slice(words, func(i, j int) bool { return len(words[i]) < len(words[j]) })

	root := &trie{}
	for _, word := range words {
		if word == "" {
			continue
		}
		if root.dfs(word) {
			ans = append(ans, word)
		} else {
			root.insert(word)
		}
	}
	return
}

// 字符串哈希+dp
// 设dp[i]表示字符串words前i个字符能够切分的最大个数
// dp[i] -> dp[j] 转移的充要条件是 dp[i] != 0 && words[i+1:j]在words中出现过
// 添加字符串哈希的功能就是为了降低避免匹配字符串时复杂度
func findAllConcatenatedWordsInADict2(words []string) []string {
	p, offset := 131, 128
	hashSet := make(map[int]bool, 0) // 存储hash值
	for _, word := range words {
		hash := 0
		for _, ch := range word {
			hash = hash*p + int(ch-'a') + offset
		}
		hashSet[hash] = true
	}

	// dp
	res := []string{}
	for _, word := range words {
		// true则加入res
		dp := make([]int, len(word)+1)
		state := false
		for i := range dp {
			dp[i] = -1
		}
		dp[0] = 0

		for i := 0; i <= len(word); i++ {
			if dp[i] == -1 {
				continue
			}

			cur := 0
			for j := i + 1; j <= len(word); j++ {
				cur = cur*p + int(word[j-1]-'a') + offset
				if _, ok := hashSet[cur]; ok {
					if dp[j] < dp[i]+1 {
						dp[j] = dp[i] + 1
					}
				}
			}
			if dp[len(word)] > 1 {
				state = true
				break
			}
		}
		if state {
			res = append(res, word)
		}
	}
	return res
}
