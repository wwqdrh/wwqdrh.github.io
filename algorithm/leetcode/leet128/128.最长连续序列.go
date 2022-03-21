package leet128

/*
 * @lc app=leetcode.cn id=128 lang=golang
 *
 * [128] 最长连续序列
 */

// @lc code=start
const NoneInt = -1 << 31

type UnionFind struct {
	g      map[int]int // 节点->根节点
	cnt    map[int]int // 节点->子节点数
	groups int         // 分组数
}

func initialUF(nums []int) *UnionFind {
	// 初始时，总共有n个分组
	uf := &UnionFind{groups: len(nums)}
	uf.g = map[int]int{}
	uf.cnt = map[int]int{}
	for _, item := range nums {
		uf.g[item] = item
		uf.cnt[item] = 1
	}
	return uf
}

// find 递归查找元素x的根结点，查找的同时将该组所有元素都直接指向根节点（路径压缩）
func (u *UnionFind) find(x int) int {
	if val, ok := u.g[x]; !ok {
		return NoneInt
	} else if val == x {
		return x
	}

	u.g[x] = u.find(u.g[x])
	return u.g[x]
}

// union 合并两个分组
func (u *UnionFind) union(x, y int) {
	xp := u.find(x)
	yp := u.find(y)

	if xp == NoneInt || yp == NoneInt {
		return
	}

	if xp == yp {
		// 已经是同一个分组了，直接返回
		return
	}
	// 我们将小分组合并到大分组（这一步不是必须的）
	// 注释掉就是把yp合到xp
	// if u.cnt[yp] > u.cnt[xp] {
	// 	xp, yp = yp, xp
	// }
	// 大分组的元素数量增加
	u.cnt[xp] += u.cnt[yp]
	// 小分组消失，让元素数量变0
	u.cnt[yp] = 0
	// 合并只需要小分组的根指向大分组任意一个元素即可
	// 这里我们让小分组的根指向大分组的根
	u.g[yp] = xp
	// 总的分组数减少
	u.groups--
}

func longestConsecutive(nums []int) int {
	// 哈希表方法，每次遍历时只从 num-1不存在的情况下，也就是遍历序列为num开始
	// 才进行判断，因为从x-1开始肯定比从x开始更优，所以可以跳过
	uf := initialUF(nums)
	for _, num := range nums {
		if uf.find(num+1) != NoneInt {
			uf.union(num+1, num)
		}
	}
	maxLength := 0
	for _, num := range nums {
		if val := uf.find(num); val != NoneInt {
			if val-num+1 > maxLength {
				maxLength = val - num + 1
			}
		}
	}
	return maxLength
}

// @lc code=end
