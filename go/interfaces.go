package main

import "fmt"

// NOTE: This examples shamelessly adapted from here:
// http://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go

// RULE OF THUMB:
// It’s typically better to take in an interface{} value as a parameter
// than it is to return an interface{} value.
// (SEE: http://en.wikipedia.org/wiki/Robustness_Principle)

// SUMMARY:
//
// - create abstractions by considering the functionality that is common
//   between datatypes, instead of the fields that are common between
//   datatypes
// - an interface{} value is not of any type; it is of interface{} type
// - interfaces are two words wide; schematically they look like:
//   (type, value)
// - it is better to accept an interface{} value than it is to return an
//   interface{} value
// - a pointer type may call the methods of its associated value type,
//   but not vice versa
// - everything is pass by value, even the receiver of a method
// - an interface value isn’t strictly a pointer or not a pointer,
//   it's just an interface
// - if you need to completely overwrite a value inside of a method, use
//   the * operator to manually dereference a pointer

// The Animal type will be an interface, and we’ll define an Animal as being
// anything that can speak. This is a core concept in Go’s type system;
// instead of designing our abstractions in terms of what kind of data our
// types can hold, we design our abstractions in terms of what actions our
// types can execute.
//
// Any type that defines this method is said to satisfy the Animal
// interface. There is no implements keyword in Go; whether or not
// a type satisfies an interface is determined automatically.
func speakExample() {
	println(`
// ======+======+======+======+======+======+======+======+======+======+======
// Interface Basics:
// ======+======+======+======+======+======+======+======+======+======+======
	`)

	animals := []Animal{Dog{}, Cat{}, Llama{}, JavaProgrammer{}}
	for _, animal := range animals {
		println(animal.Speak())
	}
}

// Animal ...
type Animal interface {
	Speak() string
}

// Dog ...
type Dog struct{}

// Speak ...
func (d Dog) Speak() string { return "woof!" }

// Cat ...
type Cat struct{}

// Speak ...
func (c Cat) Speak() string { return "meow!" }

// Llama ...
type Llama struct{}

// Speak ...
func (l Llama) Speak() string {
	return "?????"
}

// JavaProgrammer ...
type JavaProgrammer struct{}

// Speak ...
func (j JavaProgrammer) Speak() string { return "Design patterns!" }

// The interface{} type is the interface that has no methods. Since there is
// no implements keyword, all types implement at least zero methods, and
// satisfying an interface is done automatically, all types satisfy the empty
// interface. That means that if you write a function that takes an interface{}
// value as a parameter, you can supply that function with any value.
func emptyInterfaceExample() {
	println(`
// ======+======+======+======+======+======+======+======+======+======+======
// Empty Interface:
// ======+======+======+======+======+======+======+======+======+======+======
	`)

	names := []string{"stanley", "david", "oscar"}

	// Without this, an error will appear:
	// "cannot use names (type []string) as type []interface {} in function
	//  argument"
	//
	// It's ugly but: []interface{} turns out to be less useful than you would
	// initially expect).
	//
	// FOR MORE DETAILS: https://golang.org/doc/faq#convert_slice_of_interface
	vals := make([]interface{}, len(names))
	for i, v := range names {
		vals[i] = v
	}

	printAllNames(vals)
}

// BEWARE!
// names is not of any type; it is of []interface{} type.
//
// the Go runtime will perform a type conversion (if necessary), and
// convert the value to an interface{} value.
//
// NOTE:
// An interface value is constructed of two words of data; one word is
// used to point to a method table for the value’s underlying type, and
// the other word is used to point to the actual data being held by that
// value.
//
// FOR MORE DETAILS: https://research.swtch.com/interfaces
func printAllNames(names []interface{}) {
	for _, name := range names {
		fmt.Println(name)
	}
}

func pointersAndInterfacesExample() {
	println(`
// ======+======+======+======+======+======+======+======+======+======+======
// Pointers and Interfaces:
// ======+======+======+======+======+======+======+======+======+======+======
	`)

	// Error:
	// "cannot use Plane literal (type Plane) as type Vehicle in array or slice
	//  literal: Plane does not implement Vehicle (Run method has pointer
	//  receiver)"
	//
	// - You can use new(Car) or Car{}; doesn't matter
	// - You can't use Plane{}; however, you can use new(Plane) only
	//
	// Why?
	//
	// Because a pointer type can access the methods of its associated value
	// type, but not vice versa.
	//
	// A *Car value can utilize the Run method defined on Car. Whereas, a Plane
	// value cannot access the Run method defined on *Plane.
	//
	// Every time you call a function, the data you’re passing into it is copied.
	// In the case of a method with a value receiver, the value is copied when
	// calling the method.
	//
	// Method:
	// func (t T)MyMethod(s string) {...}
	// Converted into this:
	// func MyMethod(t, s)
	//
	// When you change the type of the receiver, it copies that type into the
	// function (in the method receiver). So, when you pass a value type to a
	// function, it's copied, and the Go runtime will never be able to find
	// its underlying type, it's lost.
	//
	// However, when you pass a pointer, it'll also be copied, but, this time,
	// the address of the original value will be copied; so, the runtime can
	// find its underlying type. And, by looking at that type, it can see T
	// (or Plane) implements the interface. And runs. So, whenever you pass a
	// pointer it can work both ways even the receiver in the method, defined
	// with a pointer to T or not.

	// vehicles := []Vehicle{Plane{}, Car{}} // will not work. reason above ^
	vehicles := []Vehicle{new(Plane), Car{}, new(Car)} // this will work
	for _, vehicle := range vehicles {
		println(vehicle.Run())
	}
}

// Vehicle ...
type Vehicle interface {
	Run() string
}

// Plane ...
type Plane struct{}

// Run ...
func (plane *Plane) Run() string { return "flying to the sky!" }

// Car ...
type Car struct{}

// Run ...
func (car Car) Run() string { return "wheels on the road!" }

func adaptabilityExample() {
	println(`
// ======+======+======+======+======+======+======+======+======+======+======
// Adaptability:
// ======+======+======+======+======+======+======+======+======+======+======
	`)

	// Say, you want to parse json into Go structs.

	// DON'T DO THIS:
	// GetEntity(*http.Request) (interface{}, error)
	//
	// You're going to stick too much logic into the GetEntity. Because,
	// you'll going to parse every json value into structs.
	//
	// DON'T DO THIS:
	// GetUser(*http.Request) (User, error)
	//
	// Because, you're going to have different methods for every type there.
	//
	// DO THIS:
	// type Entity interface {
	// 	UnmarshalHTTP(*http.Request) error
	// }
	//
	// func GetEntity(r *http.Request, v Entity) error {
	//	return v.UnmarshalHTTP(r)
	// }
	//
	// func (u *User) UnmarshalHTTP(r *http.Request) error {...}
	//
	// var u User
	// if err := GetEntity(req, &u); err != nil {
	//     // ...
	// }
	//
	// This way, we can define an arbitrary number of types, each of which
	// is responsible for its own unpacking from an http request. It is
	// now up to the entity definitions to decide how they may be
	// represented. Then, we can build around the Entity type to create
	// things like generic HTTP handlers.
	//
	// So, create abstractions by considering the functionality that is
	// common between datatypes, instead of the fields that are common
	// between datatypes.
}

func main() {
	speakExample()
	emptyInterfaceExample()
	pointersAndInterfacesExample()
	adaptabilityExample()
}
