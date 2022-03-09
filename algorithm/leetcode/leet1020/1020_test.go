package leet1020

import "testing"

func Test1020(t *testing.T) {
	if numEnclaves([][]int{{0, 0, 0, 0}, {1, 0, 1, 0}, {0, 1, 1, 0}, {0, 0, 0, 0}}) != 3 {
		t.Error("error")
	}

	if numEnclaves([][]int{{0, 1, 1, 0}, {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0}}) != 3 {
		t.Error("error")
	}

}
