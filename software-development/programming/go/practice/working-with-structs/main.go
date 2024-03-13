package main

import (
	"fmt"
)

func main() {
	users := []User{}
	i := 1
	for i < 3 {
		user := NewUser("Bob", "Doe", "test@test.com", i*10)
		users = append(users, *user)
		i++
	}
	for _, user := range users {
		fmt.Println(user.GetUser())
	}
}
