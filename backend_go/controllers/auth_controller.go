package controllers

import "github.com/gin-gonic/gin"
import (
	"../models"
	"net/http"
)

func RegisterUser(context *gin.Context) {

	var user models.User

	// If binding fails, aborting the request with HTTP 400
	context.BindJSON(&user)

	if user.Username == "" || user.Password == "" {
		context.AbortWithStatusJSON(
			http.StatusLengthRequired,
			gin.H{
				"error": "required fields not satisfied",
			},
		)
	}
	/*
	person := models.RegisterUser(user.Username, user.Password)
	*/
	// TODO: Insert new person into the database

	data := make(map[string]*models.User)
	data["data"] = &user
	context.JSON(http.StatusCreated, data)
}
