package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

type LogWriter struct{}

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
	// io.Copy(os.Stdout, resp.Body)

	lw := LogWriter{} // LogWriter is a struct that implements the Writer interface by implementing the Write method with the same input and output parameters as the Writer interface
	// therefore, it can be used as the dst of the io.Copy method to customize the logic of the io.Copy method to do something different than just writing to os.Stdout
	io.Copy(lw, resp.Body)

}

// This is a custom implementation of the Writer interface
// We implement the Write method and use the same input parameters as the Writer interface and return the same output parameters
// But the actual implementation is different; it just needs to be a function that takes in a byte slice and returns an int and an error to
// satisfy the Writer interface
// What logic we do inside the Write method is up to us and we are only required to return the same output parameters as the Writer interface
func (LogWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs)) // this will print the input byte slice from the io.Copy method which is the src of the io.Copy method, in this case the response body
	fmt.Println("Just wrote this many bytes:", len(bs))
	return len(bs), nil
}
