核心在于`st[i][j]`, nlogn的预处理

`st[i][j]`表示`arr[i, i+(1<<j)]`, 值为`arr[i][j-1]`与`arr[i+(1<<(j-1))][j]`之间进行比较

用于处理区间最大最小值查询

```go

type ST struct {
    data [][]int
    op func(int, int) int
}

func NewST(nums []int, op func(int, int) int) ST {
    n := len(nums)
    sz := bits.Len(uint(n))
    data := make([][]int, n) // 一维:元素个数, 二维:长度的位长度(与上文的.2^j.关系相对应)
    for i, v := range nums {
        data[i] = make([]int, sz)
        data[i][0] = v // 表示 i...i+2^0-1 即第i个位置最大值为v
    }
    // 状态转移
    for j := 1; 1<<j <= n; j++ {
        for i := 0; i + (1<<j) <= n; i++ {
            // i+(1<<j) 小于等于n，能够保证i也不超过长度
            data[i][j] = op(data[i][j-1], data[i+(1<<(j-1))][j-1]) // 代入到i+2^j-1这个公式可知是吧这里[i,i+2^j-1] 分成了 [i,i+2^(j-1)-1],[i+2^(j-1), i+2^(j-1) + (2^(j-1) - 1)] => 最后一个可以合并 [i+2^(j-1), i+2^j-1] => 完成分割两部分
        }
    }
    return ST{
        data: data,
        op: op,
    }
}

// !!注意Query的时候查询的范围是[l, r)
func (st ST) Query(l, r int) int {
    k := bits.Len(uint(r-l)) - 1
    return st.op(st.data[l][k], st.data[r-(1<<k)][k])
}
```