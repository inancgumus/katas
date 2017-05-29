package main

func main() {
	c := make(chan string)
	c <- "foo"
	c <- "bar" // will block, since it's a buffered channel -- deadlock!
	// fatal error: all goroutines are asleep - deadlock!
}
