package main

import (
	"flag"
	"fmt"
)

type ServerConfig struct {
	port int
}

func main() {
	var serverConfig ServerConfig
	flag.IntVar(&serverConfig.port, "port", 8080, "Port to listen on")
	flag.Parse()
	fmt.Printf("Server will listen on port %d\n", serverConfig.port)
}
