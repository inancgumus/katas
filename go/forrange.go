package main

import (
	"fmt"
	"time"
)

func main() {
	// variable-free for-range form
	// introduced in go 1.4
	go func() {
		for range time.Tick(time.Second) {
			fmt.Println(time.Now())
		}
	}()

	// blocks forever
	<-make(chan interface{})
}
