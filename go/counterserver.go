package main

import (
	"fmt"
	"net/http"
)

// Counter stores the hits
// Also because:	we cannot define new methods on int
//								int is a non-local type to this package
//								we need a local type
type Counter int

func (c *Counter) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	*c++
	fmt.Fprintf(w, "counter: %d\n", *c)
}

func main() {
	http.Handle("/", new(Counter))
	http.ListenAndServe(":8080", nil)
}
