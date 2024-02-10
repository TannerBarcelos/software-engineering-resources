package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/tannerbarcelos/simple-gin-service/db"
	"github.com/tannerbarcelos/simple-gin-service/util"
)

func init() {
	util.LoadEnv()
	db.ConnectDB()
}

func pingController(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

func main() {

	server := util.CreateServer()

	server.GET("/ping", pingController)
	server.Run(os.Getenv("PORT"))
}
