```go
// 使用邻接表来表示顶点之间的关系
func DFSIter(graph [][]int) []int {
    res := []int{}

    stack := []int{}
    cur := 0
    visit := map[int]struct{}{}
    for len(stack) > 0 || cur >= 0 {
        for {
            if _, ok := visit[cur]; ok {
                break
            }
            for _, item := range graph[cur] {
                if _, ok := visit[item]; !ok {
                    stack = append(stack, item)
                }
            }
        }

        cur := stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        res = append(res, cur)
        cur = stack[len(stack)-1]
        stack = stack[:len(stack)-1]
    }

    return res
}
```