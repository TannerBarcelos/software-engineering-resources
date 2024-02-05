package main

import "fmt"

func addNumbers(a int, b int) int {
	return a + b
}

func subtractNumbers(a int, b int) int {
	return a - b
}

func multiplyNumbers(a int, b int) int {
	return a * b
}

func divideNumbers(a int, b int) int {

	if b == 0 {
		fmt.Println("Cannot divide by zero")
		return 0
	}

	return a / b
}

func isEven(a int) bool {
	return a % 2 == 0
}

func printArithmeticResults() {
	a, b := 10, 5
	res4 := divideNumbers(a, b)
	fmt.Println("Addition:", addNumbers(a, b))
	fmt.Println("Subtraction:", subtractNumbers(a, b))
	fmt.Println("Multiplication:", multiplyNumbers(a, b))
	fmt.Println("Division:", res4)
	fmt.Println("Is", a, "even?", isEven(a))
}


func main() {
	printArithmeticResults()
}