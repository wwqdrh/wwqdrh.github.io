package leetcode

/*
 * @lc app=leetcode.cn id=2013 lang=golang
 *
 * [2013] 检测正方形
 */

// @lc code=start
type DetectSquares struct {
	// 添加的点可以重复存储
	// 根据查询点记录组成的正方形个数(重复点直接相乘)
	// 关键点在于如何使用这些点快速找到正方形 寻找同一竖直线上有哪些点 然后直接计算其他点判断是否存在
	// 只需要记录竖直边
	xMapping   map[int][]int // 存储x这条垂直线上所有存在的点 记录y值
	posMapping map[Pos]int   // 位置的hashset
}

type Pos struct {
	xPos int
	yPos int
}

func Constructor() DetectSquares {
	return DetectSquares{
		xMapping:   map[int][]int{},
		posMapping: map[Pos]int{},
	}
}

func (this *DetectSquares) Add(point []int) {
	x, y := point[0], point[1]
	if _, ok := this.posMapping[Pos{
		xPos: x,
		yPos: y,
	}]; !ok {
		this.xMapping[x] = append(this.xMapping[x], y)
	}
	this.posMapping[Pos{
		xPos: x,
		yPos: y,
	}]++
}

func (this *DetectSquares) Count(point []int) int {
	res := 0

	x, y := point[0], point[1]
	for _, item := range this.xMapping[x] {
		if y == item {
			continue
		}

		t := abs(y, item)
		// 右边
		res += this.posMapping[Pos{xPos: x, yPos: item}] *
			this.posMapping[Pos{xPos: x + t, yPos: y}] *
			this.posMapping[Pos{xPos: x + t, yPos: item}]
		// 左边
		res += this.posMapping[Pos{xPos: x, yPos: item}] *
			this.posMapping[Pos{xPos: x - t, yPos: y}] *
			this.posMapping[Pos{xPos: x - t, yPos: item}]
	}
	return res
}

func abs(x, y int) int {
	res := x - y
	if res < 0 {
		res = -res
	}
	return res
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(point);
 * param_2 := obj.Count(point);
 */
// @lc code=end
