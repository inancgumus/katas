package main

import (
	"fmt"
	"time"
)

// JOBS represents the number of jobs workers do
const JOBS = 2

// WORKERS represents the number of workers
const WORKERS = 5

func work(in <-chan int, out chan<- int) {
	for n := range in {
		out <- n * n
	}
}

func main() {
	in := make(chan int, JOBS)
	out := make(chan int, JOBS)

	for w := 1; w <= WORKERS; w++ {
		go work(in, out)
	}

	for j := 1; j <= JOBS; j++ {
		in <- j
	}
	close(in)

	go func() {
		for r := range out {
			fmt.Println("result:", r)
		}
	}()

	// wait for all goroutines to keep up
	time.Sleep(time.Second)
}
