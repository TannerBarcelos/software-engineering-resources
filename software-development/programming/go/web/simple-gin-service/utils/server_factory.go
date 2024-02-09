package utils

import "github.com/gin-gonic/gin"

func CreateServer() *gin.Engine {
	LoadEnv()
	r := gin.Default()
	return r
}
