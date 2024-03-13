package main

import "fmt"

type User struct {
	FirstName string
	LastName  string
	Email     string
	Age       int
}

func NewUser(firstName, lastName, email string, age int) *User {
	return &User{
		FirstName: firstName,
		LastName:  lastName,
		Email:     email,
		Age:       age,
	}
}

func (u *User) GetUser() string {
	return fmt.Sprintf("%s %s, %s, %d", u.FirstName, u.LastName, u.Email, u.Age)
}
