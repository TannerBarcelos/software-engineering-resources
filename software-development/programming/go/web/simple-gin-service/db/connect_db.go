package db

import (
	"log"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func ConnectDB() {
	DB_NAME := os.Getenv("DB_NAME")

    d, err := gorm.Open(sqlite.Open(DB_NAME), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

    db = d // assign the pointer so we now have a variable of shared database logic for the whole app

	log.Printf("Connected to %s", DB_NAME)
}

// returns the DB instance 
func GetDB() *gorm.DB {
  return db
}
