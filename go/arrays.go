package main

import (
	"fmt"
	"time"
)

func main() {
	var array [5]string
	p("var array [5]string ==> %#v", array)

	ints := [5]int{1, 2, 3, 4, 5}
	p("[5]int {} ==> %#v", ints)

	intsSize := [...]int{1, 2, 3, 4, 5}
	p("[...]int {} ==> %#v", intsSize)

	intsSpecific := [5]int{1: 2, 3: 4}
	p("[5]int { 1: 2, 3: 4 } ==> %#v", intsSpecific)

	intsMake := make([]int, 5)
	p("make([]int, 5) ==> %#v", intsMake)

	intsPointers := [5]*int{0: new(int), 1: new(int)}
	*intsPointers[0] = 10
	p("*intsPointers[0] ==> %d", *intsPointers[0])

	var otherIntsPointers [5]*int
	otherIntsPointers = intsPointers // copying pointers
	p("*otherIntsPointers[0] ==> %d", *otherIntsPointers[0])

	// bad: copying arrays by passing by value
	var mils [1e6]int
	var pass = func(n [1e6]int) [1e6]int { return n }
	pass(mils)
	time.Sleep(50000)
}

func p(format string, a ...interface{}) {
	fmt.Printf("* "+format+"\n", a...)
}
