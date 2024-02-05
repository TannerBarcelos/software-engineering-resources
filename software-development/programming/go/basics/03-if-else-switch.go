package main

import "fmt"

func main() {
	x, y := 10, 5

	// Note the use of operators from the previous lesson 02-operators.go

	// If statement - Looks like the if statement in JavaScript but without the parentheses
	if x > y {
		fmt.Println("x is greater than y")
	} else if x < y {
		fmt.Println("x is less than y")
	} else {
		fmt.Println("x is equal to y")
	}

	if y <= 5 {
		fmt.Println("y is less than or equal to 5")
	}

	// Switch - Looks like the switch statement in JavaScript but without the parentheses
	animal := "dog"

	switch animal {
	case "cat":
		fmt.Println("Meow! Meow!")
	case "dog":
		fmt.Println("Bark! Bark!")
	case "fish":
		fmt.Println("Glub! Glub!")
	default:
		fmt.Println("This is not a cat, dog, or fish")
	}

	/*
		Note: Go does not require a break statement after each case. It will automatically break after each case.

		If/else, switch behave and look like their JavaScript counterparts but without the parentheses.
	*/
}