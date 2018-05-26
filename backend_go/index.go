package main

import (
	"./handlers"
	"./models"
	"fmt"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
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
	if err != nil {
		fmt.Println(err.Error())
		return
	} else {
		fmt.Println("Database connection OK")
	}

	router := initializeRoutes()
	router.Run()
}
