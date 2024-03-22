package main

import (
	"flag"
	"fmt"
)

func main() {
	age := flag.Int("age", 21, "age of the person")
	flag.Parse()
	fmt.Printf("Age: %d\n", *age)
}
