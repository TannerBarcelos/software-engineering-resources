package main

import "fmt"

func main() {
	// Declare a map with string keys and int values
	myMap := make(map[string]int)

	// Add key-value pairs to the map
	myMap["apple"] = 1
	myMap["banana"] = 2
	myMap["orange"] = 3

	// Access values by key
	fmt.Println(myMap["apple"])   // Output: 1
	fmt.Println(myMap["banana"])  // Output: 2
	fmt.Println(myMap["orange"])  // Output: 3

	// Check if a key exists in the map
	_, exists := myMap["grape"]
	fmt.Println(exists)  // Output: false

	// Iterate over the map
	for key, value := range myMap {
		fmt.Println(key, value)
	}
}

// Maps vs Structs
// Maps are a collection of key-value pairs, where the key is unique within the map.
// Structs are a collection of fields, where each field has a name and a value.
// Use a map when you need to store a collection of key-value pairs, and you don't know the number of key-value pairs in advance.
// Use a struct when you need to store a collection of fields, and you know the number of fields in advance.