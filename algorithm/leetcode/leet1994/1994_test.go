package leet1994

import (
	"fmt"
	"testing"
)

func TestNumberOfGoodSubsets(t *testing.T) {
	res := numberOfGoodSubsets([]int{5, 10, 1, 26, 24, 21, 24, 23, 11, 12, 27, 4, 17, 16, 2, 6, 1, 1, 6, 8, 13, 30, 24, 20, 2, 19})
	fmt.Println(res)
}
