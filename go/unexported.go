package main

import (
	"another"
	"fmt"
)

func main() {
	myhede := another.Get()
	fmt.Printf("%p\n", myhede)
	myhede.Name = "another world"
	fmt.Printf("%#v\n", *myhede)
}
