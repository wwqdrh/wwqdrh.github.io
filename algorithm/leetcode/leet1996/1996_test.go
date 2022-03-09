package leetcode1996

import "testing"

func Test1996(t *testing.T) {
	numberOfWeakCharacters([][]int{{1, 5}, {10, 4}, {4, 3}})

	numberOfWeakCharacters([][]int{{1, 1}, {2, 1}, {2, 2}, {1, 2}})

	numberOfWeakCharacters([][]int{{7, 7}, {1, 2}, {9, 7}, {7, 3}, {3, 10}, {9, 8}, {8, 10}, {4, 3}, {1, 5}, {1, 5}})

	numberOfWeakCharacters([][]int{{7, 9}, {10, 7}, {6, 9}, {10, 4}, {7, 5}, {7, 10}})
}
