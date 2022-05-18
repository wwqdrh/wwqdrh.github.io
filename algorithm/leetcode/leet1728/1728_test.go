package leet1728

import "testing"

func Test1728(t *testing.T) {
	if !canMouseWin([]string{"M.C...F"}, 1, 4) {
		t.Error("错误")
	}

	if canMouseWin([]string{"C...#", "...#F", "....#", "M...."}, 2, 5) {
		t.Error("错误")
	}

	if !canMouseWin([]string{".M...", "..#..", "#..#.", "C#.#.", "...#F"}, 3, 1) {
		t.Error("错误")
	}
}
