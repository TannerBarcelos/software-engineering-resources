package main

import (
	"log"
	"os"

	"github.com/tannerbarcelos/mux/pkg/api"
	"github.com/tannerbarcelos/mux/util"
)

func main() {

	util.BootstrapServer()

	server := api.NewApiServer(os.Getenv("PORT"))

	if err := server.Start(); err != nil {
		log.Fatalf("error starting server: %v", err)
	}
}
