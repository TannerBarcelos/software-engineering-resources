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
	fmt.Printf("%+v\n", Willow) // %+v prints the field names along with the values

	// Shorter way to create a new Animal struct - order of fields must match the order in the struct definition as Go uses positional arguments
	Max := Animal{"Max", 5, "Brown"}
	fmt.Println(Max)
	fmt.Printf("%+v\n", Max)

	// We can also create a struct and assign values to fields in one go
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
