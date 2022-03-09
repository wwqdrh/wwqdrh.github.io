package leetcode

// 给定年月日返回当前是星期几
// 1970-12-31是星期四

var week = []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}
var monthDays = []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

// 获取为星期几
func dayOfTheWeek(day, month, year int) string {
	days := 0
	days += 365*(year-1971) + (year-1969)/4
	for _, d := range monthDays[:month-1] {
		days += d
	}
	if month >= 3 && (year%400 == 0 || year%4 == 0 && year%100 != 0) {
		days++
	}
	days += day
	return week[(days+3)%7]
}
