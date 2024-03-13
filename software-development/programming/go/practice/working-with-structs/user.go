package main

import "fmt"

type Users struct {
	Users []User
}

func (u *User) GetUser() string {
	return fmt.Sprintf("%s %s, %s, %d", u.FirstName, u.LastName, u.Email, u.Age)
}

func (u *Users) AddUser(user *User) {
	u.Users = append(u.Users, *user)
}

func (u *Users) GetUsers() *[]User {
	return &u.Users
}

func (u *Users) PrintUsers() {
	for _, user := range u.Users {
		fmt.Println(user.GetUser())
	}
}

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
