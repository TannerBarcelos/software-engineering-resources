package main

import "fmt"

// Embeded structs
type ContactInfo struct {
	Phone, Email string
}
type Hobby struct {
	Name string
}
type User struct {
	Name    string
	Age     int
	Contact ContactInfo
	Hobbies []Hobby // slice of Hobby structs
}

func main() {
	// Idiomatic Go code uses CamelCase for Struct names and fields
	type Animal struct {
		Name  string
		Age   int
		Color string
	}

	// Create a new Animal struct -- notice no space between the struct name and the curly brace
	Willow := Animal{
		Name:  "Willow",
		Age:   3,
		Color: "Black and White",
	}
	Willow.Name = "Willow the Dog"

	fmt.Printf("%+v\n", Willow) // %+v prints the field names along with the values

	// Shorter way to create a new Animal struct - order of fields must match the order in the struct definition as Go uses positional arguments
	// This is not recommended as it can lead to confusion
	Max := Animal{"Max", 5, "Brown"}
	fmt.Println(Max) // {"" 0 ""} - empty string and 0 for int fields (the "" will not be printed, so you will see {0})
	fmt.Printf("%+v\n", Max)

	var Bob Animal // delayed initialization, all fields will be set to their zero value (empty string, 0, etc. see below print), if we use Printf we will see the empty string
	fmt.Printf("%+v\n", Bob)
	Bob.Name = "Bob"
	Bob.Age = 2
	Bob.Color = "White"

	fmt.Println(Bob)

	// We can also create a struct and assign values to fields in one go
	// This is useful when we want to create a struct and use it immediately without having to assign it to a variable, but it can be confusing
	willow := struct {
		Name  string
		Age   int
		Color string
	}{
		Name:  "Willow",
		Age:   3,
		Color: "Black and White",
	}

	fmt.Println(willow)

	// Create a new User struct
	user1 := User{
		Name: "Tanner",
		Age:  29,
		Contact: ContactInfo{
			Phone: "123-456-7890",
			Email: "test@test.com",
		},
		Hobbies: []Hobby{
			{Name: "Gaming"},
			{Name: "Programming"},
		},
	}

	user2 := User{
		Name: "John",
		Age:  44,
		Contact: ContactInfo{
			Phone: "123-456-7890",
			Email: "b",
		},
		Hobbies: []Hobby{
			{Name: "Gaming"},
			{Name: "Programming"},
		},
	}
	// fmt.Printf("%+v\n", user1) // {Name:Tanner Age:29 Contact:{Phone:123-456-7890 Email:test@test.com} Hobbies:[{Name:Gaming} {Name:Programming}]}

	user1.describe()
	user2.describe()

	// Update the name of the user - best way
	user1.updateName("Tanner Smith")
	user1.updateAge(30)

	// Update the name of the user - second way to call the method (more verbose)
	updatedUser2 := &user2
	updatedUser2.updateName("John Smith")

	user1.describe()
}

// Method with a receiver of type User
// Any operations on the User struct can be done here but WILL NOT modify the original struct given that the receiver is passed by value
// We need to use a pointer receiver to modify the original struct
func (u User) describe() {
	fmt.Printf("%+v\n", u)
}

// Method with a pointer receiver pointing to a User struct - this will modify the original struct
// The use of * before the type name is saying that the type is a pointer type
// Using * in your code (not in a type) is used to dereference a pointer, meaning to get the value that the pointer is pointing to
// The pointer will point to the location of the variable the method is called on, not the overall struct itself (meaning, if we define 5 users, we will have 5 pointers pointing to 5 different locations in memory.)
func (u *User) updateName(newName string) {
	u.Name = newName
}

func (u *User) updateAge(newAge int) {
	u.Age = newAge
}
