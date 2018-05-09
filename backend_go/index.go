package main

import "github.com/gin-gonic/gin"
import "./controllers"

func setUpRouter() *gin.Engine {

	router := gin.Default()

	router.POST("/register", controllers.Register)

	// TODO: router.POST("/login", controllers.Login)

	return router
}

func main() {

	router := setUpRouter()
	router.Run()
}
