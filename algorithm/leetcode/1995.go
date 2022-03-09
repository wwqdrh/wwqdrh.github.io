package leetcode

// 找到四元组 满足 a+b+c=d

// O(n^3) 遍历+哈希表存储c到最后一个元素的计数情况，c是从高到低的
func countQuadruplets(nums []int) int {
	cnt := map[int]int{}
	length := len(nums)
	res := 0
	for c := length - 2; c >= 2; c-- {
		cnt[nums[c+1]]++ // 计数
		for a, x := range nums[:c] {
			for _, y := range nums[a+1 : c] {
				if val, ok := cnt[x+y+nums[c]]; ok {
					res += val
				}
			}
		}
	}
	return res
}
