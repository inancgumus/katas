package main

import (
	"log"
	"net/http"
	// pprof will inject handlers to http to profile your program
	// you can see all the goroutines and their stack traces
	_ "net/http/pprof"
)

func main() {
	go func() {
		log.Println(http.ListenAndServe("localhost:6060", nil))
	}()

	<-make(chan int)
}
