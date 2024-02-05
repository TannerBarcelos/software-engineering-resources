package main

import "fmt"

func main() {
	// Arithmetic operators
	// +, -, *, /, %, ++, --
	// + is also used to concatenate strings
	// % is used to find the remainder of a division
	// ++ and -- are used to increment and decrement by 1
	a, b := 10, 5
	fmt.Println(a + b) // 15
	fmt.Println(a - b) // 5
	fmt.Println(a * b) // 50
	fmt.Println(a / b) // 2
	fmt.Println(a % b) // 0
	fmt.Println(a) // 11
	fmt.Println(a) // 10

	// Comparison operators
	// ==, !=, >, <, >=, <=
	c, d := 10, 5
	fmt.Println(c == d) // false
	fmt.Println(c != d) // true
	fmt.Println(c > d) // true
	fmt.Println(c < d) // false
	fmt.Println(c >= d) // true
	fmt.Println(c <= d) // false

	// Logical operators
	// &&, ||, !
	// && is the logical AND operator
	// || is the logical OR operator
	// ! is the logical NOT operator
	e, f := true, false
	fmt.Println(e && f) // false
	fmt.Println(e || f) // true
	fmt.Println(!e) // false
	fmt.Println(!f) // true

	// Bitwise operators
	// &, |, ^, <<, >>
	// & is the bitwise AND operator - returns 1 if both bits are 1
	// | is the bitwise OR operator - returns 1 if either bit is 1
	// ^ is the bitwise XOR operator - returns 1 if the bits are different
	// << is the left shift operator - shifts the bits to the left by the number of positions specified e.g. 5 << 1 = 10
	// >> is the right shift operator - shifts the bits to the right by the number of positions specified e.g. 5 >> 1 = 2
	g, h := 5, 10
	fmt.Println(g & h) // 0
	fmt.Println(g | h) // 15
	fmt.Println(g ^ h) // 15
	fmt.Println(g << 1) // 10
	fmt.Println(g >> 1) // 2
}