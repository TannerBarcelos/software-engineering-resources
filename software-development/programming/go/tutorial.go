// Run this file with the command: go run tutorial.go
package main

import "fmt"

// Entry point of the program (like C, C++ and Java) it is needed and has to be called main
func main() {
	value := returnNumber(200)
	printNumber(value)
}

func returnNumber(val int) int {
	return val
}

func printNumber(number int) {
	fmt.Println(number)
}