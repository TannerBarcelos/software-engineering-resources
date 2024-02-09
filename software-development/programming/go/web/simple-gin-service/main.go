package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/tannerbarcelos/simple-gin-service/utils"
)

func main() {
	utils.LoadEnv()
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.Run(os.Getenv("PORT"))
}
