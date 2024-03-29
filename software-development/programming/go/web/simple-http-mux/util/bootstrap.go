package util

import (
	"log"

	"github.com/joho/godotenv"
)

func BootstrapServer() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
