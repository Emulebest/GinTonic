package main

import (
	"./handlers"
	"./models"
	"./middlewares"
	"fmt"
	"github.com/gin-gonic/gin"
)

func initializeRoutes() *gin.Engine {

	router := gin.Default()

	userRoutes := router.Group("/user")
	{
		userRoutes.GET("/", middlewares.IsAuth(), handlers.GetUserInfo)
		authRoutes := userRoutes.Group("/auth")
		{
			authRoutes.POST("/register", handlers.RegisterUser)
			authRoutes.POST("/login", handlers.LoginUser)
		}
	}

	return router
}

func main() {

	models.InitializeDB()
	defer models.CloseDB()

	fmt.Println("[VADYM] Successfully connected to the Postgres DB.")

	router := initializeRoutes()
	router.Run()
}
