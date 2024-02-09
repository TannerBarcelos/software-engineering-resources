package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos"
	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// // This work is abstracted away when using a web framework like gin - the framework does this for you
	// bs := make([]byte, 99999)
	// resp.Body.Read(bs)
	// fmt.Println(string(bs))

	// Abstracting away the above code - using io.Copy.
	io.Copy(os.Stdout, resp.Body)

}
