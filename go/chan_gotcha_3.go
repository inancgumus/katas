package main

func main() {
	c := make(chan string, 2)
	invalid(c)
	// correct(c)
}

func invalid(c chan string) {
	c <- "foo"
	c <- "bar"
	for i := range c {
		println(i) // will block undefinitely since the chan is not closed
	}
}

func correct(c chan string) {
	c <- "foo"
	c <- "bar"
	close(c)
	for i := range c {
		println(i) // will block undefinitely since the chan is not closed
	}
}
