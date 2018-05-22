package main

import "github.com/gin-gonic/gin"
import "./handlers"

func initializeRoutes() *gin.Engine {

	router := gin.Default()

	userRoutes := router.Group("/u")
	{
		userRoutes.POST("/register", handlers.RegisterUser)
		userRoutes.POST("/login", handlers.LoginUser)
	}

	return router
}

func main() {

	router := initializeRoutes()
	router.Run()
}
