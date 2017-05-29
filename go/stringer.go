package main

import (
	"fmt"
	"strconv"
)

func main() {
	var a myint
	a = 3
	fmt.Println(a) // will print 6 due to Stringer String() interface
}

type myint int

func (i myint) String() string {
	// such a loosy way to convert... omg.
	return strconv.Itoa(int(i) * 2)
}
