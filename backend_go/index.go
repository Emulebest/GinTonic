package main

import (
	"./handlers"
	"./models"
	"fmt"
	"github.com/gin-gonic/gin"
)

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

	err := models.InitializeDB()
	defer models.CloseDB()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	fmt.Println("[VADYM] Successfully connected to the Postgres DB.")

	router := initializeRoutes()
	router.Run()
}
