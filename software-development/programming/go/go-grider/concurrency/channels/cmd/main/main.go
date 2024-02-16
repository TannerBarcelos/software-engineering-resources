package main

import (
	"fmt"
	"log"
	"net/http"
)

type Links []string

func main() {
	links := Links{
		"http://www.google.com",
		"http://www.facebook.com",
		"http://www.golang.org",
		"http://www.amazon.com",
	}

	for _, link := range links {
		go checkLink(link) // "go" keyword creates a new go routine (A go routine is a lightweight thread of execution that is spawned by the main go routine and runs concurrently with the main go routine)
	}
}

func checkLink(link string) {
	response, err := http.Get(link)

	if err != nil {
		log.Fatal(err)
	}

	if response.StatusCode != 200 {
		log.Fatalf("Error: %s is down", link)
	}

	defer response.Body.Close()

	fmt.Println(link, "is up")
}
