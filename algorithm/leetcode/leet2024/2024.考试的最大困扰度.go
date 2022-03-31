package leet2024

/*
 * @lc app=leetcode.cn id=2024 lang=golang
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
func maxConsecutiveAnswers(answerKey string, k int) int {
	a := maxResolve(answerKey, k, 'T')
	b := maxResolve(answerKey, k, 'F')
	if a > b {
		return a
	}
	return b
}

func maxResolve(answerKey string, k int, flag byte) (ans int) {
	left, sum := 0, 0
	for right := 0; right < len(answerKey); right++ {
		if answerKey[right] == flag {
			sum++
		}

		for sum > k {
			if answerKey[left] == flag {
				sum--
			}
			left++
		}
		if right-left+1 > ans {
			ans = right - left + 1
		}
	}
	return
}

// @lc code=end
