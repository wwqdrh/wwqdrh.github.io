package leetcode

// 括号的最大嵌套深度

// (1+(2*3)+((8)/4))+1
func maxDepth(s string) int {
	maxDep := 0
	leftNum := 0 // 记录当前的左括号 不断遍历其中最大值就是最大深度
	for _, ch := range s {
		if ch == '(' {
			leftNum++
			if leftNum > maxDep {
				maxDep = leftNum
			}
		} else if ch == ')' {
			leftNum--
		}
	}
	return maxDep
}
