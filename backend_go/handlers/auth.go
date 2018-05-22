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

	data := make(map[string]*string)
	data["token"] = &newUser.Token

	context.JSON(http.StatusCreated, data)
}

func LoginUser(context *gin.Context) {

	var boundUser models.User
	context.BindJSON(&boundUser)

	token, loginOK := models.LoginUser(boundUser.Username, boundUser.Password)

	if !loginOK {
		context.AbortWithStatusJSON(
			http.StatusBadRequest,
			gin.H{
				"error": "the given username/password combination is incorrect",
			},
		)
		return
	}

	data := make(map[string]*string)
	data["token"] = &token

	context.JSON(http.StatusAccepted, data)
}
