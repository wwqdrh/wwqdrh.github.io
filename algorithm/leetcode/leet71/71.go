package leet71

import (
	"strings"
)

func simplifyPath(path string) string {
	pathParts := strings.Split(path, "/")
	stack := []string{}
	for _, item := range pathParts {
		if item == "" || item == "." {
			continue
		}
		if item == ".." {
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			}
		} else {
			stack = append(stack, item)
		}
	}
	return "/" + strings.Join(stack, "/")
}
