// adapted from: https://golang.org/test/range.go
package main

import (
	"time"
)

func gen(c chan int, lo, hi int) {
	for i := lo; i <= hi; i++ {
		c <- i
	}
	close(c)
}

func seq(lo, hi int) chan int {
	c := make(chan int)
	go gen(c, lo, hi)
	return c
}

// `gen` abstracts and hides `chan` implementation
func main() {
	s := ""
	for i := range seq('a', 'z') {
		s += string(i)
	}
	println("received from seq", s)

	time.Sleep(100 * time.Millisecond)
}
