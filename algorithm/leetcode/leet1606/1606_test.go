package leet1606

import "testing"

func TestBusiestServers(t *testing.T) {
	// busiestServers(3, []int{1, 2, 3, 4, 5}, []int{5, 2, 3, 3, 3})
	busiestServers(2,
		[]int{1, 2, 3},
		[]int{1000000000, 1, 1000000000})
}
