package main

func main() {
	c := make(chan struct{})
	close(c)
	close(c) // will panic!
	// panic: close of closed channel
}
