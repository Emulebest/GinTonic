package main

import (
	"./handlers"
	"./models"
	"./middlewares"
	"fmt"
	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, Auth")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func initializeRoutes() *gin.Engine {

	router := gin.Default()

	router.Use(CORSMiddleware())

	userRoutes := router.Group("/user")
	{
		userRoutes.GET("/", middlewares.IsAuth(), handlers.GetUserInfo)
		userRoutes.PUT("/", middlewares.IsAuth(), handlers.EditUserInfo)

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
/*
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Auth"},
		AllowCredentials: true,
	}))
*/
	router.Run()
}
