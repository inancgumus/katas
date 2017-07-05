package main

import (
	"fmt"
	"log"
	"net/http"
)

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello")
}

func before(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "before")
		next.ServeHTTP(w, r)
	})
}

func after(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		next.ServeHTTP(w, r)
		fmt.Fprintln(w, "after")
	})
}

func main() {
	log.Print("Starting")

	http.Handle("/", before(after(http.HandlerFunc(hello))))
	http.ListenAndServe(":3000", nil)
}
