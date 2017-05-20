package main

import (
	"fmt"
)

func main() {
	// note: empty/nil slices allocate no spaces

	// nil slice
	var nils []int
	fmt.Printf("var nils []int ==> %#v (ptr: %p) nil? %t\n",
		nils, &nils, nils == nil)

	// empty slice
	empty := make([]int, 0)
	fmt.Printf("var empty []int ==> %#v (ptr: %p) nil? %t\n",
		empty, &empty, empty == nil)

	// slice literal also creates empty slices
	emptylit := []int{}
	fmt.Printf("emptylit := []int{} ==> %#v (ptr: %p) nil? %t\n",
		emptylit, &emptylit, emptylit == nil)

	// slice with a specified length
	bylen := make([]string, 5)
	fmt.Printf("bylen := make([]string, 5) ==> %#v\n", bylen)

	// capacity: 3; length: 5
	bycap := make([]string, 3, 5)
	fmt.Printf("bycap := make([]string, 3, 5) ==> %#v capacity: %d\n",
		bycap, cap(bycap))

	// slice literal
	lit := []string{"silicon", "valley"}
	fmt.Printf("lit := []string{ \"silicon\", \"valley\" } ==> %#v\n", lit)

	// slice literal reserved capacity
	caplit := []string{9: "X"}
	fmt.Printf("caplit := []string{9: \"X\"} ==> %#v\n", caplit)

	// change slice item by index
	byix := []int{1, 2, 3}
	byix[1] = 4
	fmt.Printf("byix ==> %#v\n", byix)

	// taking the slice of a slice
	// 1- inclusive-op: ss[2:2] -> nil
	// 2- original slice and the new slice shares the same underlying array
	// 3- cap(bite) is 3 because, it takes a bite from the starting pos of 2
	//   that means: items {3, 4, 5} will be available to the slice
	//   however, slice will point to {3, 4} only
	// 4- cap(bite) is 3 but, you can't reach the last element
	//   unless you use append
	ss := []int{1, 2, 3, 4, 5}
	bite := ss[2:4]
	ss[2] = 0 // will change both ss and bite (see: above 3th reason)
	fmt.Printf("bite := ss[2:4] ==> ss: %#v bite: %#v cap(bite): %d\n",
		ss, bite, cap(bite))

	// grow bite by appending the last element
	bite = append(bite, ss[len(ss)-1])
	bite = append(bite, ss[len(ss)-1])
	ss[1] = 0 // will change both ss and bite (see: above 3th reason)
	fmt.Printf("bite := ss[2:4] ==> ss: %#v bite: %#v cap(bite): %d\n",
		ss, bite, cap(bite))
}
