package main

import (
	"encoding/json"
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
	url := "https://jsonplaceholder.typicode.com/todos/1"

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

	log.Printf("Todo: %+v", body)

}
