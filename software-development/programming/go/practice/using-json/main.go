package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

type Todo struct {
	UserId    int    `json:"userId"` // struct tags: https://golang.org/pkg/encoding/json/#Marshal
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func main() {
	simpleJsonExample()
	advancedJsonExample()
}

// This is the simple, more verbose way to interact with JSON in Go
func simpleJsonExample() {
	url := "https://jsonplaceholder.typicode.com/todos/2"

	response, err := http.Get(url)

	if err != nil {
		log.Fatalf("Error: %s", err)
	}

	defer response.Body.Close() // close response body, deffering the function call til the end of the main functions execution

	if response.StatusCode != 200 {
		log.Fatalf("Error: %s", response.Status)
	}

	// Read the response body - Returns a byte slice and an error
	bodyBytes, err := io.ReadAll(response.Body)

	if err != nil {
		log.Fatalf("Error: %s", err)
	}

	body := Todo{}

	// Unmarshal the JSON byte slice to a struct (in our case, a Todo struct) so we can use Go code to interact with the data
	err = json.Unmarshal(bodyBytes, &body)

	if err != nil {
		log.Fatalf("Error: %s", err)
	}

	log.Printf("Todo: %+v", body) // learn more about the %+v verb here: https://golang.org/pkg/fmt/

	// Now let's encode the struct back to JSON to convey what we would do if we were sending a JSON response, like in a web server
	encoded, err := json.Marshal(body)

	if err != nil {
		log.Fatalf("Error: %s", err)
	}

	log.Printf("Encoded: %s", encoded) // notice it takes the struct Uppercases and converts them to lowercase following the struct tag schema!
}

// This is the more advanced way to interact with JSON in Go, and is more idiomatic
func advancedJsonExample() {
	url := "https://jsonplaceholder.typicode.com/todos/2"

	response, err := http.Get(url)

	if err != nil {
		log.Fatalf("Error: %s", err)
	}

	defer response.Body.Close() // close response body, deffering the function call til the end of the main functions execution

	if response.StatusCode != 200 {
		log.Fatalf("Error: %s", response.Status)
	}

	todoItem := Todo{}

	decoder := json.NewDecoder(response.Body) // Benefit of this method is that there are many more methods available to the Decoder type
	decoder.DisallowUnknownFields()           // This will cause the decoder to return an error if the JSON has fields that are not in the struct

	// Try decode the JSON into the struct - it will return an error if it fails to decode i.e if the JSON is not valid or has fields that are not in the struct
	if err := decoder.Decode(&todoItem); err != nil {
		log.Fatalf("Error: %s", err)
	}

	log.Printf("Todo: %+v", todoItem)

	// Now let's encode the struct back to JSON to convey what we would do if we were sending a JSON response, like in a web server
	todo, err := json.MarshalIndent(todoItem, "", "\t") // MarshalIndent is a method that will return a formatted JSON string

	if err != nil {
		log.Fatalf("Error: %s", err)
	}

	fmt.Println(string(todo))
}
