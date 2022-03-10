package leet589

/*
 * @lc app=leetcode.cn id=589 lang=golang
 *
 * [589] N 叉树的前序遍历
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

func preorder(root *Node) (ans []int) {
	if root == nil {
		return
	}

	stack := []*Node{root}
	for len(stack) > 0 {
		top := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		ans = append(ans, top.Val)
		for i := len(top.Children) - 1; i >= 0; i-- {
			stack = append(stack, top.Children[i])
		}
	}
	return
}

// @lc code=end
