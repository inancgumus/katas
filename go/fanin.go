package main

import (
	"fmt"
	"time"
)

func producer(name string, in chan int, d time.Duration) {
	var i int
	for {
		fmt.Println("--->", name, "produced:", i)
		in <- i
		i++
		time.Sleep(d)
	}
}

func consumer(out chan int) {
	for x := range out {
		fmt.Println("consumed:", x)
		time.Sleep(5000 * time.Millisecond)
	}
}

func main() {
	in := make(chan int)
	out := make(chan int)
	go producer("producer 1", in, 1*time.Second)
	go producer("producer 2", in, 2*time.Second)
	go consumer(out)

	for i := range in {
		out <- i
	}
}
