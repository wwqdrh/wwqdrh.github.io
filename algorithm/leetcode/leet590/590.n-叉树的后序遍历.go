package leet590

/*
 * @lc app=leetcode.cn id=590 lang=golang
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

type Node struct {
	Val      int
	Children []*Node
}

func postorder(root *Node) (ans []int) {
	if root == nil {
		return
	}
	st := []*Node{root}
	vis := map[*Node]bool{}
	for len(st) > 0 {
		node := st[len(st)-1]
		// 如果当前节点为叶子节点或者当前节点的子节点已经遍历过
		if len(node.Children) == 0 || vis[node] {
			ans = append(ans, node.Val)
			st = st[:len(st)-1]
			continue
		}
		for i := len(node.Children) - 1; i >= 0; i-- {
			st = append(st, node.Children[i])
		}
		vis[node] = true
	}
	return
}

// @lc code=end
