package leet114

func alienOrder(words []string) string {
	g := map[byte][]byte{}  // 正向邻接表
	inDeg := map[byte]int{} // 入度表

	// 构建入度表以及邻接表
	for _, c := range words[0] {
		inDeg[byte(c)] = 0
	}
next:
	for i := 1; i < len(words); i++ {
		pre, cur := words[i-1], words[i]
		for _, c := range cur {
			inDeg[byte(c)] += 0 // 为了让map中存在这个`byte(c)`
		}
		for j := 0; j < len(pre) && j < len(cur); j++ {
			if pre[j] != cur[j] {
				// 不相等，说明前面的比后面的小
				g[pre[j]] = append(g[pre[j]], cur[j])
				inDeg[cur[j]]++
				continue next
			}
		}
		if len(pre) > len(cur) {
			return ""
		}
	}

	// 拓扑排序
	res := make([]byte, len(inDeg))
	q := res[:0]
	for ch, num := range inDeg {
		if num == 0 {
			q = append(q, ch)
		}
	}
	for len(q) > 0 {
		u := q[0]
		q = q[1:]
		for _, v := range g[u] {
			if inDeg[v]--; inDeg[v] == 0 {
				q = append(q, v)
			}
		}
	}
	if cap(q) == 0 {
		// 容量减少是因为上文中的q = q[1:]
		// 这么判断是因为
		// 最初容量是由indeg决定的，即元素个数
		// 当最终q容量为0的时候，即所有的元素都已经参加拓扑排序了
		return string(res)
	}
	return ""
}
