package main

import (
	"fmt"
	"time"
)

func timer(d time.Duration) <-chan int {
	c := make(chan int)
	i := 1

	for ; i <= 5; i++ {
		go func(i int) {
			time.Sleep(d * time.Duration(i))
			c <- i

			if i == 5 {
				close(c)
			}
		}(i)
	}
	return c
}

func main() {
	c := timer(100 * time.Millisecond)
	for v := range c {
		fmt.Println(v)
	}
}
