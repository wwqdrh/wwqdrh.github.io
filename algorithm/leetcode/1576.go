package leetcode

func modifyString(s string) string {
	chars := []byte{}
	chars = append(chars, ' ')
	chars = append(chars, []byte(s)...)
	chars = append(chars, ' ')

	for i := 1; i < len(chars)-1; i++ {
		if chars[i] != '?' {
			continue
		}
		for idx := 0; idx < 26; idx++ {
			ch := byte(idx + 'a')
			if ch != chars[i-1] && ch != chars[i+1] {
				chars[i] = ch
				break
			}
		}
	}
	return string(chars[1 : len(chars)-1])
}

// 官方题解
// 在替换时，实际不需要遍历所有的小写字母，只需要遍历三个互不相同的字母，就能保证一定找到一个与前后字符均不相同的字母，在此我们可以限定三个不同的字母为 \texttt{(`a',`b',`c')}(‘a’,‘b’,‘c’)。
func modifyString2(s string) string {
	res := []byte(s)
	n := len(res)
	for i, ch := range res {
		if ch == '?' {
			for b := byte('a'); b <= 'c'; b++ {
				if !(i > 0 && res[i-1] == b || i < n-1 && res[i+1] == b) {
					res[i] = b
					break
				}
			}
		}
	}
	return string(res)
}
