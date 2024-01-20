// Run this file with the command: go run tutorial.go (this compiles and runs the program)
// To compile the program use the command: go build tutorial.go (this only compiles the program) and generates a executable file
// To run the executable file use the command: ./tutorial (this runs the executable file)
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