package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")

	// Variables
	var myAge int = 28 // int
	var myName string = "Maria" // string
	var iAmCool bool = true // bool
	var myGpa float32 = 3.2 // float32 (32-bit floating point number)

	fmt.Println(myAge, myName, iAmCool, myGpa)

	// Short hand variables
	// This is a more concise way to declare variables and is the preferred way to declare variables in Go
	// The type of the variable is inferred from the value assigned to it and the type is not explicitly declared
	age := 28
	name := "Maria"
	cool := true
	gpa := 3.2

	fmt.Println(age, name, cool, gpa)

	// Block of variables
	// Blocks are used to group variables together and can be used to group variables of the same type
	// This is useful when you have a lot of variables of the same type and you want to keep them organized
	var (
		age2 = 28
		name2 = "Maria"
		cool2 = true
		gpa2 = 3.2
	)

	fmt.Println(age2, name2, cool2, gpa2)

	// Compounded variables
	var name3, email, age3 = "Maria", "blah", 28
	fmt.Println(name3, email, age3)
}