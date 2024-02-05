package main

import "fmt"

func main() {
	purchases := []float32{} // Create a slice of float32s with a length of 0 to start

	for i:=0; i<10; i++ {
		// pushing / appending to the slice is done with the built-in append function which returns a new slice with the new value
		purchases = append(purchases, float32(i * 10)) // Append a new float32 to the slice
	}

	// We can access elements in a slice using their index
	for j:= 0; j < len(purchases); j++ {
		fmt.Println(purchases[j])
	}

	for index, purchase := range purchases {
		fmt.Println("Index=",index, " Value=",purchase)
	}

	// We can also take a slice of a slice - This is like Python's list slicing
	myInnerSlice := purchases[2:5] // This will create a new slice from the 3rd to the 5th element of the purchases slice
	fmt.Println(myInnerSlice) // [20 30 40]

	// We can also "spread" or "combine" slices
	endSlice := append(purchases, myInnerSlice...)
	fmt.Println(endSlice) // [0 10 20 30 40 50 60 70 80 90 20 30 40]
}


// Slices are a key data type in Go, giving a more powerful interface to sequences than arrays.
// They are essentially dynamic arrays with a lot of extra features.