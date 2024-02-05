package main

import "fmt"

func changeValue(val *int) {
	*val = 400
}

func main() {
	num := 42
	ptr := &num // Creates an int pointer

	fmt.Println("Value of num:", num)
	fmt.Println("Address of num:", &num) // & is used to get the address of a variable / store the address of a variable in a pointer variable
	fmt.Println("Value stored in ptr:", *ptr)

	*ptr = 100 // dereferencing the pointer to change the value of num
	fmt.Println("Modified value of num:", num)

	changeValue(ptr)
	fmt.Println("Modified value of num:", num)
	fmt.Println("Address of num:", &num) // Address is the same but the value has changed. This is the power of pointers
}