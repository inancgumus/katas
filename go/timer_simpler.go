package main

import (
	"fmt"
	"time"
)

func timer(d time.Duration, i int) <-chan int {
	c := make(chan int)
	go func() {
		time.Sleep(d)
		c <- i
	}()
	return c
}

func main() {
	for i := 0; i < 5; i++ {
		c := timer(100*time.Millisecond, i+1)
		fmt.Println(<-c)
	}
}
