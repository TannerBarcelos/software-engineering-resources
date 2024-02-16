package main

import (
	"fmt"
	"net/http"
	"time"
)

type Links []string

func main() {

	links := Links{
		"http://www.google.com",
		"http://www.facebook.com",
		"http://www.golang.org",
		"http://www.amazon.com",
	}

	// Create a channel to enable communication between go routines, specifically sharing strings between go routines
	c := make(chan string)

	for _, link := range links {
		go checkLink(link, c) // "go" keyword creates a new go routine (A go routine is a lightweight thread of execution that is spawned by the main go routine and runs concurrently with the main go routine)
	}

	// fmt.Println(<-c) // This will block the main go routine until a value is received from the channel
	// fmt.Println(<-c)
	// fmt.Println(<-c)
	// fmt.Println(<-c)
	// fmt.Println(<-c) // we had 4 links but we are trying to read from the channel 5 times, this will cause the main go routine to block indefinitely. So, we know channels are bound by a size, and we can only read from them as many times as they have values. We can fix this by using a for loop to read from the channel as many times as there are links

	// We can range over channels to read from them
	for l := range c {
		go func(link string) {
			time.Sleep(5 * time.Second) // sleep for 5 seconds
			checkLink(link, c)
		}(l)
	}
}

func checkLink(link string, c chan string) {
	_, err := http.Get(link)

	if err != nil {
		fmt.Println(err)
		c <- link + " is down"
	}

	fmt.Println(link)

	// Send the link to the channel
	c <- link
}
