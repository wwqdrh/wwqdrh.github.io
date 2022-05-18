package leet1728

// 参考: https://leetcode.cn/problems/cat-and-mouse-ii/solution/by-ac_oier-gse8/
// 参考别人的实现
// 但是还是有问题，java版本确定没有问题，应该是转成go版本有问题
// 时间复杂度：令 nn 和 mm 分别为矩阵的长宽，最长移动距离为 LL，复杂度为 O(n^2 * m^2 * 1000 * 4 * L)
// 	空间复杂度：O(n^2 * m^2 * 1000)

const (
	S = 8 * 8 * 8 * 8
	K = 1000
)

var (
	dires      = [][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
	f          = [S][K]int{}
	s          = []string{}
	tx, ty     int
	m, n, a, b int
	g          []string
)

func init() {
	for i := range f {
		for j := range f[i] {
			f[i][j] = -1
		}
	}
}

func dfs(x, y, p, q, k int) int {
	state := (x << 9) | (y << 6) | (p << 3) | q
	if k == K-1 {
		f[state][k] = 1
		return 1
	}
	if x == p && y == q {
		f[state][k] = 1
		return 1
	}
	if x == tx && y == ty {
		f[state][k] = 0
		return 0
	}
	if p == tx && q == ty {
		f[state][k] = 1
		return 1
	}
	if f[state][k] != -1 {
		return f[state][k]
	}

	if k%2 == 0 { // mouse
		for _, di := range dires {
			for i := 0; i <= b; i++ {
				nx := x + di[0]*i
				ny := y + di[1]*i
				if nx < 0 || nx >= n || ny < 0 || ny >= m {
					break
				}
				if g[nx][ny] == '#' {
					break
				}
				if dfs(nx, ny, p, q, k+1) == 0 {
					f[state][k] = 0
					return 0
				}
			}
		}
		f[state][k] = 1
		return 1
	} else { // cat
		for _, di := range dires {
			for i := 0; i <= a; i++ {
				np := p + di[0]*i
				nq := q + di[1]*i
				if np < 0 || np >= n || nq < 0 || nq >= m {
					break
				}
				if g[np][nq] == '#' {
					break
				}
				if dfs(x, y, np, nq, k+1) == 1 {
					f[state][k] = 1
					return 1
				}
			}
		}
		f[state][k] = 0
		return 0
	}
}

func canMouseWin2(grid []string, canJump int, mouseJump int) bool {
	g = grid
	n, m := len(grid), len(grid[0])
	a, b = canJump, mouseJump

	x1, y1, x2, y2 := 0, 0, 0, 0 // 1老鼠 2猫 tx食物终点
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if grid[i][j] == 'M' {
				x1, y1 = i, j
			} else if grid[i][j] == 'C' {
				x2, y2 = i, j
			} else if grid[i][j] == 'F' {
				tx, ty = i, j
			}
		}
	}
	return dfs(x1, y1, x2, y2, 0) == 0
}

// 代码没有问题 但是时间复杂度很高
// 最终执行结果: 1836ms (官方题解go版本40ms)
// import java.time.Clock;
// class Solution {
//     static int S = 8 * 8 * 8 * 8, K = 1000;
//     static int[][] f = new int[S][K]; // mouse : 0 / cat : 1
//     String[] g;
//     int n, m, a, b, tx, ty;
//     int[][] dirs = new int[][]{{1,0}, {-1,0}, {0,1}, {0,-1}};
//     // mouse : (x, y) / cat : (p, q)
//     int dfs(int x, int y, int p, int q, int k) {
//         int state = (x << 9) | (y << 6) | (p << 3) | q;
//         if (k == K - 1) return f[state][k] = 1;
//         if (x == p && y == q) return f[state][k] = 1;
//         if (x == tx && y == ty) return f[state][k] = 0;
//         if (p == tx && q == ty) return f[state][k] = 1;
//         if (f[state][k] != -1) return f[state][k];
//         if (k % 2 == 0) { // mouse
//             for (int[] di : dirs) {
//                 for (int i = 0; i <= b; i++) {
//                     int nx = x + di[0] * i, ny = y + di[1] * i;
//                     if (nx < 0 || nx >= n || ny < 0 || ny >= m) break;
//                     if (g[nx].charAt(ny) == '#') break;
//                     if (dfs(nx, ny, p, q, k + 1) == 0) return f[state][k] = 0;
//                 }
//             }
//             return f[state][k] = 1;
//         } else { // cat
//             for (int[] di : dirs) {
//                 for (int i = 0; i <= a; i++) {
//                     int np = p + di[0] * i, nq = q + di[1] * i;
//                     if (np < 0 || np >= n || nq < 0 || nq >= m) break;
//                     if (g[np].charAt(nq) == '#') break;
//                     if (dfs(x, y, np, nq, k + 1) == 1) return f[state][k] = 1;
//                 }
//             }
//             return f[state][k] = 0;
//         }
//     }
//     public boolean canMouseWin(String[] grid, int catJump, int mouseJump) {
//         g = grid;
//         n = g.length; m = g[0].length(); a = catJump; b = mouseJump;
//         for (int i = 0; i < S; i++) Arrays.fill(f[i], -1);
//         int x = 0, y = 0, p = 0, q = 0;
//         for (int i = 0; i < n; i++) {
//             for (int j = 0; j < m; j++) {
//                 if (g[i].charAt(j) == 'M') {
//                     x = i; y = j;
//                 } else if (g[i].charAt(j) == 'C') {
//                     p = i; q = j;
//                 } else if (g[i].charAt(j) == 'F') {
//                     tx = i; ty = j;
//                 }
//             }
//         }
//         return dfs(x, y, p, q, 0) == 0;
//     }
// }
