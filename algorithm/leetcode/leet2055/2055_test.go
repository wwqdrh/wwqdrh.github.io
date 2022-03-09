package leet2055

import "testing"

func TestQuery(t *testing.T) {
	platesBetweenCandles("***|**|*****|**||**|*", [][]int{{1, 17}, {4, 5}, {14, 17}, {5, 11}, {15, 16}})
}
