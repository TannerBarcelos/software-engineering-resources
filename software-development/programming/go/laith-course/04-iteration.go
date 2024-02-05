package main

import "fmt"

func main() {

	// Basic for-loop
	for i := 0; i <= 10; i++ {
		fmt.Println(i)
	}

	// For-loop with if-else
	for i := 0; i <= 10; i++ {
		if i % 2 == 0 {
			fmt.Println(i, "even")
		} else {
			fmt.Println(i, "odd")
		}
	}

	// Print a triangle of stars
	for i := 0; i < 10; i++ {
		stars := ""
		for j := 0; j <= i; j++ {
			stars += "*"
		}
		fmt.Println(stars)
	}

	// Range based for loop (ignore the use of this array stuff for now; we'll cover it later)
	// Range based for loop is used to iterate over an array, slice, string, map, or channel. It returns the index and the value.
	animals := []string{"cat", "dog", "fish"}
	for index, animal := range animals {
		fmt.Println(index, animal)
	}

	// If you do not care to use the index, you can use the blank identifier _
	for _, animal := range animals {
		fmt.Println(animal)
	}

	// While loop - Go does not have a while loop. You can use a for loop to achieve the same effect.
	// This is the equivalent of a while loop in Go
	i := 0
	for i < 10 {
		fmt.Println(i)
		i++
	}
	
}