package leet420

/*
 * @lc app=leetcode.cn id=420 lang=golang
 *
 * [420] 强密码检验器
 */

// @lc code=start
func strongPasswordChecker(password string) int {
	// i当前遍历到的位置 state当前的种类数状态 length当前的长度状态 step当前移动了的步数

	// 计算原始字符串有多少个字符串种类
	base_state := 0
	for _, c := range password {
		if c >= 'a' {
			base_state |= 1
		} else if c >= 'A' {
			base_state |= 2
		} else {
			base_state |= 4
		}
	}

	ans := 1<<31 - 1
	// 获取尾状态
	// state当前的种类数状态 length当前的长度
	get_final_step := func(state, length int) int {
		cneed := 0
		for state != 0 {
			state &= state - 1 // 删除最低位的1，也就是这里是统计有多少个1
			cneed += 1
		}
		cneed = 3 - cneed

		lneed := 0
		if length < 6 {
			lneed = 6 - length
			return max(cneed, lneed)
		} else if length > 20 {
			lneed = length - 20
			return lneed + cneed
		}
		return max(cneed, lneed)
	}

	add_state := func(state int) int {
		if state == 7 {
			return state // 已经三种了
		}
		if state|1 != state {
			return state | 1
		}
		if state|2 != state {
			return state | 2
		}
		return 7
	}

	var backTrace func(i, state, length, step int)
	backTrace = func(i, state, length, step int) {
		if i == len(password) {
			ans = min(ans, step+get_final_step(state, length))
		}

		// last co用来统计是否出现了连续的三次的
		last := byte(' ')
		co := 0
		for ; i < len(password); i++ {
			if password[i] == last {
				if co < 2 {
					co += 1
					length += 1
				} else {
					// 修改
					backTrace(i+1, add_state(state), length+1, step+1)
					// 插入
					if len(password) < 6 {
						backTrace(i, add_state(state), length+1, step+1)
					}
					// 删除
					step += 1 // 删除这一步可以直接跳过
				}
			} else {
				last = password[i]
				length += 1
				co = 1
			}
		}
		ans = min(ans, step+get_final_step(state, length))
	}
	backTrace(0, base_state, 0, 0)
	return ans
}

func min(a, b int) int {
	if a <= b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a >= b {
		return a
	}
	return b
}

// @lc code=end
