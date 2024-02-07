package main

import "fmt"

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

}
