package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/tannerbarcelos/simple-gin-service/utils"
)

func main() {

	server := utils.CreateServer()

	server.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	server.Run(os.Getenv("PORT"))
}
