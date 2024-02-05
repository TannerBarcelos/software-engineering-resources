package main

import "fmt"

func main() {
	// Idiomatic Go code uses CamelCase for Struct names
	type Animal struct {
		Name string
		Age int
		Color string
	}

	// Create a new Animal struct -- notice no space between the struct name and the curly brace
	Willow := Animal{
		Name: "Willow",
		Age: 3,
		Color: "Black and White",
	}
	fmt.Println(Willow.Name, "is a", Willow.Color, "dog who is", Willow.Age, "years old.")


	// Shorter way to create a new Animal struct
	var Max = Animal{"Max", 5, "Brown"}
	fmt.Println(Max)
	fmt.Println(Max.Name, "is a", Max.Color, "dog who is", Max.Age, "years old.") // Can still access fields by name even when using the shorter way to create a struct


	// We can also create a struct and assign values to fields in one go
	willow := struct {
		Name string
		Age int
		Color string
	} {
		Name: "Willow",
		Age: 3,
		Color: "Black and White",
	}

	fmt.Println(willow)

}