package main

import (
	"fmt"
	"math"
)

func gen(nums ...int) <-chan int {
	out := make(chan int)
	go func() {
		for _, n := range nums {
			out <- n
		}
		close(out)
	}()
	return out
}

type cruncher func(int) int

func calc(in <-chan int, f cruncher) <-chan int {
	out := make(chan int)
	go func() {
		for n := range in {
			out <- f(n)
		}
		close(out)
	}()
	return out
}

func printer(in <-chan int) {
	for n := range in {
		fmt.Println(n)
	}
}

func main() {
	sqf := func(n int) int {
		return n * n
	}

	sqrf := func(n int) int {
		return int(math.Sqrt(float64(n)))
	}

	printer(calc(calc(gen(1, 2, 3, 4, 5), sqf), sqrf))
}
