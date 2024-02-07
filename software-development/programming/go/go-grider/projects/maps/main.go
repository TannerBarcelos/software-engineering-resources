package main

import "fmt"

func main() {

	// Way 1 to declare a map
	type Colors map[string]string

	// colors := map[string]string{
	// 	"red":   "#ff0000",
	// 	"green": "#00ff00",
	// 	"blue":  "#0000ff",
	// }

	// or

	// Most of the time we use this way to declare a map
	colors := Colors{
		"red":   "#ff0000",
		"green": "#00ff00",
		"blue":  "#0000ff",
	}

	// Way 2 using make
	//colors2 := make(map[string]string) // empty map

	//fmt.Printf("Colors: %v\n", colors2) // map[]

	// Iterate over map
	printMap(colors)

	// Add a key to map
	colors["white"] = "#ffffff"

	// Delete a key from map
	delete(colors, "red")

	//fmt.Printf("Colors: %v\n", colors) // map[blue:#0000ff green:#00ff00 white:#ffffff] => red is deleted

}

func printMap(someMap map[string]string) {
	for key, value := range someMap {
		fmt.Printf("The hex code for the color %s is %s\n", key, value)
	}
}
