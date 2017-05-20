package main

import (
    "fmt"
    "time"
)

func main() {
  var mils [1e7]int

  func() {
    // good: copying arrays by passing by reference
    var passp = func(n *[1e7]int) *[1e7]int { return n }
    passp(&mils)
  }()
  fmt.Printf("should sleep...")
  time.Sleep(time.Millisecond * 5000)

  func() {
    // bad: copying arrays by passing by value
    var pass = func(n [1e7]int) [1e7]int { return n }
    pass(mils)
  }()
  fmt.Printf("should sleep...")
  time.Sleep(time.Millisecond * 5000)
}

func p(format string, a ...interface{}) {
	fmt.Printf("* "+format+"\n", a...)
}

