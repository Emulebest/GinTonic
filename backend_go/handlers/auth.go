package handlers

import "github.com/gin-gonic/gin"
import (
	"../models"
	"net/http"
)

func RegisterUser(context *gin.Context) {

	var boundUser models.User
	// If binding fails, aborting the request with HTTP 400
	context.BindJSON(&boundUser)

	newUser, err := models.RegisterUser(boundUser.Username, boundUser.Password)

	if err != nil {
		context.AbortWithStatusJSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)
		return
	}

	data := make(map[string]*models.User)
	data["user"] = newUser

	context.JSON(http.StatusCreated, data)
}

func LoginUser(context *gin.Context) {

	var boundUser models.User
	context.BindJSON(&boundUser)

	loggedUser, err := models.LoginUser(boundUser.Username, boundUser.Password)

	if err != nil {
		context.AbortWithStatusJSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)
		return
	}

	data := make(map[string]*models.User)
	data["user"] = loggedUser

	context.JSON(http.StatusAccepted, data)
}
