package utils

import "github.com/gin-gonic/gin"

func CreateServer() *gin.Engine {
	r := gin.Default()
	return r
}
