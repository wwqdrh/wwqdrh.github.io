package leetcode

// 累加数

// 难点在于累加可能是多个byte组成一个数
// 1、枚举所有可能，枚举第二个元素可以的索引 然后截取出来第一个和第二个进行相加 判断与后面的是否相等，然后不断更新几个元素的索引继续判断
// 2、dfs: 递归状态保存前两个元素，遍历不断组成新的元素 判断如果满足条件则进行下一层筛选
func stringAdd(x, y string) string {
	res := []byte{}
	carry, cur := 0, 0
	for x != "" || y != "" || carry != 0 {
		cur = carry
		if x != "" {
			cur += int(x[len(x)-1] - '0')
			x = x[:len(x)-1]
		}
		if y != "" {
			cur += int(y[len(y)-1] - '0')
			y = y[:len(y)-1]
		}
		carry = cur / 10
		cur %= 10
		res = append(res, byte(cur)+'0')
	}
	for i, n := 0, len(res); i < n/2; i++ {
		res[i], res[n-1-i] = res[n-1-i], res[i]
	}
	return string(res)
}

func valid(num string, secondStart, secondEnd int) bool {
	n := len(num)
	firstStart, firstEnd := 0, secondStart-1
	for secondEnd <= n-1 {
		third := stringAdd(num[firstStart:firstEnd+1], num[secondStart:secondEnd+1])
		thirdStart := secondEnd + 1
		thirdEnd := secondEnd + len(third)
		if thirdEnd >= n || num[thirdStart:thirdEnd+1] != third {
			break
		}
		if thirdEnd == n-1 {
			return true
		}
		firstStart, firstEnd = secondStart, secondEnd
		secondStart, secondEnd = thirdStart, thirdEnd
	}
	return false
}

func isAdditiveNumber(num string) bool {
	n := len(num)
	for secondStart := 1; secondStart < n-1; secondStart++ {
		if num[0] == '0' && secondStart != 1 {
			break
		}
		for secondEnd := secondStart; secondEnd < n-1; secondEnd++ {
			if num[secondStart] == '0' && secondStart != secondEnd {
				break
			}
			if valid(num, secondStart, secondEnd) {
				return true
			}
		}
	}
	return false
}

func isAdditiveNumber2(num string) bool {
	var dfs func(i, j, k int) bool
	dfs = func(i, j, k int) bool {
		if (num[i] == '0' && j-i > 1) || (num[j] == '0' && k-j > 1) {
			return false
		}
		target := stringAdd(num[i:j], num[j:k])
		if k+len(target) > len(num) || target != num[k:k+len(target)] {
			return false
		}
		if k+len(target) == len(num) {
			return true
		}
		return dfs(j, k, k+len(target))
	}
	for j := 1; j < len(num); j++ {
		for k := j + 1; k < len(num); k++ {
			if dfs(0, j, k) {
				return true
			}
		}
	}
	return false
}
