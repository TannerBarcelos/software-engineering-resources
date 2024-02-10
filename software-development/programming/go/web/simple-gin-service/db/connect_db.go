package db

import (
	"log"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func ConnectDB() {
	DB_NAME := os.Getenv("DB_NAME")

	_, err := gorm.Open(sqlite.Open(DB_NAME), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	log.Printf("Connected to %s", DB_NAME)
}
