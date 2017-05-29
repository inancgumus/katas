package main

func main() {
	c := make(chan string, 2)
	c <- "foo"
	c <- "bar"
	c <- "jazz" // will block, since it's a buffered channel with 2 elements -- deadlock!
	// fatal error: all goroutines are asleep - deadlock!
}
