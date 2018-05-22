package main

import "github.com/gin-gonic/gin"
import "./handlers"

func initializeRoutes() *gin.Engine {

	router := gin.Default()

	userRoutes := router.Group("/user")
	{
		authRoutes := userRoutes.Group("/auth")
		{
			authRoutes.POST("/register", handlers.RegisterUser)
			authRoutes.POST("/login", handlers.LoginUser)
		}
	}

	return router
}

func main() {

	router := initializeRoutes()
	router.Run()
}
