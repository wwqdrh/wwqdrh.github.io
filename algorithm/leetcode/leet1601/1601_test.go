package leet1601

import "testing"

func TestMaximRequest(t *testing.T) {
	maximumRequests(3, [][]int{{0, 0}, {1, 1}, {0, 0}, {2, 0}, {2, 2}, {1, 1}, {2, 1}, {0, 1}, {0, 1}})
}
