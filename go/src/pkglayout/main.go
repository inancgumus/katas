package main

import (
	"fmt"
	"pkglayout/fake"
)

func main() {
	// users := postgress.NewUserService(nil)
	users := fake.NewUserService()
	u, _ := users.User(101)

	fmt.Printf("%+v\ncalled: %t\n", u, users.Called)
}
