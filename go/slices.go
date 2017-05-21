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
	// 1- inclusive-op: ss[2:2] -> empty
	// 2- original slice and the new slice shares the same underlying array
	// 3- cap(bite) is 3 because, it takes a bite from the starting pos of 2
	//   that means: items {3, 4, 5} will be available to the slice
	//   however, slice will point to {3, 4} only
	// 4- cap(bite) is 3 but, you can't reach the last element
	//   unless you use append
	// 5- new slice will use a new underlying array when the new slice can't
	//    fit into the old underlying error (after append)
	// 6- fixing the capacity of the new slice will prevent errors
	//    because, go will assign a new underlying array because of rule 5
	//    above.
	ss := []int{1, 2, 3, 4, 5}
	bite := ss[2:4]
	ss[2] = 0 // will change both ss and bite (see: above 3th reason)
	fmt.Printf("bite := ss[2:4] ==> ss: %#v bite: %#v cap(bite): %d\n",
		ss, bite, cap(bite))

	// grow bite by appending the last element
	bite = append(bite, ss[len(ss)-1])
	bite = append(bite, 10)
	// no longer changes ss, because: it has a new underlying array now
	bite[1] = 9
	fmt.Printf("bite := ss[2:4] ==> ss: %#v bite: %#v cap(bite): %d\n",
		ss, bite, cap(bite))

	// rule 6: new underlying array will not change the old underlying array of ss
	bite = ss[2:3:3]
	bite = append(bite, 42)
	fmt.Printf("bite := ss[2:4:2] ==> ss: %#v bite: %#v cap(bite): %d\n",
		ss, bite, cap(bite))

	// appending slices together
	sub := []string{"i", "we"}
	obj := []string{"you", "they"}
	sub = append(sub, obj...)
	fmt.Printf("sub := append(sub, obj...) ==> sub: %#v\n", sub)

	fmt.Println("iterating over slices:")
	for i, v := range sub {
		fmt.Printf("\t%d: %s, ", i, v)

		if i == len(sub)-1 {
			fmt.Printf("\n")
		}
	}

	// for each iteration, range copies the i-th element in slice into v
	// so, it's inside a new memory address
	fmt.Println("range copies values inside slice:")
	for i, v := range sub {
		fmt.Printf("\tv: %d, v addr: %x; addr: %x\n", i, &v, &sub[i])
	}

	// passing slices to functions is cheap
	// it's not as expensive as like the arrays
	// because: slices passed by value to a pointer
	//          in slice-structure:
	//          -> beginning pointer
	//          -> length
	//          -> capacity
	// so: no need to pass slices as pointers
	//     for arrays, it's better to pass by pointers
	foo := func(slice []int) []int {
		fmt.Println("passing slice by value to a function")
		return slice
	}
	// doesn't matter even the slice contains 10^6 elements
	slice := make([]int, 1e6)
	slice = foo(slice)
	slice = foo(slice)
}
