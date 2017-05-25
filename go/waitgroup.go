package main

import (
	"fmt"
	"sync"
)

// JOBS represents the number of jobs workers do
const JOBS = 2

// WORKERS represents the number of workers
const WORKERS = 5

func work(in <-chan int, out chan<- int, wg *sync.WaitGroup) {
	for n := range in {
		out <- n * n
	}
	wg.Done()
}

var wg sync.WaitGroup

func main() {
	in := make(chan int, JOBS)
	out := make(chan int, JOBS)

	for w := 1; w <= WORKERS; w++ {
		wg.Add(1)
		go work(in, out, &wg)
	}

	for j := 1; j <= JOBS; j++ {
		in <- j
	}
	close(in)

	wg.Wait()
	close(out)

	for r := range out {
		fmt.Println("result:", r)
	}

	// for r := 1; r <= JOBS; r++ {
	// 	fmt.Println("result:", <-out)
	// }
}
