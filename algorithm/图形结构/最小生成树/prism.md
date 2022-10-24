```go
func abs(x, y int) int {
    if x < y {
        return y - x
    }
    return x - y
}

func Prim(points [][]int) int {
    n := len(points)
    // 构建邻接矩阵
    grid := make([][]int, n)
    for i := range grid {
        grid[i] = make([]int, n)
    }
    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            grid[i][j] = abs(points[i][0], points[j][0]) + abs(points[i][1], points[j][1])
        }
    }
    
    // visited记录点的访问状态
    visited := make([]int, n) // 是否已经作为最短路径的边加入
    d := make([]int, n) // 表示与i相连的点中最短的长度
    for i := 1; i < n; i++ {
        d[i] = math.MaxInt32
    }
    
    // 计算最小生成树的长度
    res := 0
    for {
        minCost := math.MaxInt32
        u := -1 // 记录最小的点
        for i := 0; i < n; i++ {
            if visited[i] == 0 && d[i] < minCost {
                minCost = d[i]
                u = i
            }
        }
        if u == -1 {
            // 点都加入了 退出循环
            break
        }
        
        res += minCost
        visited[u] = 1
        for i := 0; i < n; i++ {
            if visited[i] == 0 && grid[u][i] > 0 {
            if grid[u][i] < d[i] {
                d[i] = grid[u][i] // 更新距离数组
            }
            }
        }
    }
    return res
}
```