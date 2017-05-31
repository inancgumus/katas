package main

import (
	"bufio"
	"fmt"
	"os"
	"time"
)

func main() {
	t := make(chan bool)
	s := make(chan string)

	fmt.Println("Type something then press enter or wait for timeout...")

	go readString(s)
	go timeout(t)
	go countdown()

	select {
	case msg := <-s:
		fmt.Printf("Received: %s\n", msg)
	case <-t:
		fmt.Printf("Timed out\n")
	}
}

func timeout(t chan bool) {
	time.Sleep(time.Second * 5)
	t <- true
}

func readString(s chan<- string) {
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')
	s <- text
}

func countdown() {
	for i := 5; i >= 0; i-- {
		fmt.Println(i)
		time.Sleep(time.Second)
	}
}
