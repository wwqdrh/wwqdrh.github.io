```go
// 使用邻接表来表示顶点之间的关系
func BFSIter(graph [][]int) []int {
    res := []int{}

    queue := []int{0}
    visit := map[int]struct{}{}
    for len(queue) > 0 {
        tmp := []int{}
        for _, item := range queue {
            if _, ok := visit[item]; ok {
                continue
            }
            for _, next := range graph[item] {
                if _, ok := visit[next]; ok {
                    continue
                }
                tmp = append(tmp, next)
            }
        }
        queue = tmp
    }

    return res
}
```