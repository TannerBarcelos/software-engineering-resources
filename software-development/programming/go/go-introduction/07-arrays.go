package main

func main() {
	// Arrays in Go are fixed in size
	sports := [3]string{"Football", "Basketball", "Baseball"} // Array of strings with a length of 3

	// We can access elements in an array using their index
	println(sports[0]) // Football

	// We can also change the value of an element in an array using their index
	sports[0] = "Soccer"

	// We can also create an array without specifying the length
	// The length of the array will be determined by the number of elements in the array
	colors := [...]string{"Red", "Green", "Blue"}
	println(len(colors)) // 3
	println(colors[0]) //Red
}