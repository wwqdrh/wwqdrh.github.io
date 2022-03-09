package leetcode

import "testing"

func TestNumFriendRequests(t *testing.T) {
	if res := numFriendRequests([]int{16, 16}); res != 2 {
		t.Error("numFriendRequests 错误: ", res)
	}
	if res := numFriendRequests([]int{16, 17, 18}); res != 2 {
		t.Error("numFriendRequests 错误: ", res)
	}
	if numFriendRequests([]int{20, 30, 100, 110, 120}) != 3 {
		t.Error("numFriendRequests 错误")
	}
}
