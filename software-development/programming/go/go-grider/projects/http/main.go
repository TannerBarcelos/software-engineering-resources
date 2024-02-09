package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	url := "https://www.tannerbarcelos.com"
	resp, err := http.Get(url)

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	// This work is abstracted away when using a web framework like gin - the framework does this for you
	bs := make([]byte, 99999)
	resp.Body.Read(bs)
	fmt.Println(string(bs))

}
