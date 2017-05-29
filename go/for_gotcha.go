package main

func main() {
	names := []string{"foo", "bar", "jazz"}
	for j := range names {
		println(j) // will not print names, intead prints indexes
	}

	// correct usage:
	for _, name := range names { // omits index value
		println(name)
	}
}
