package handlers

import (
	"../models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetUserInfo(context *gin.Context) {
	user := context.MustGet("user").(models.User)

	dbUser := models.FindUser(user.ID)

	context.JSON(
		http.StatusOK,
		dbUser,
	)
}

func EditUserInfo(context *gin.Context) {
	jsonUser := context.MustGet("user").(models.User)

	err := models.EditUser(&jsonUser)

	if err != nil {
		context.AbortWithStatusJSON(
			http.StatusBadRequest,
			gin.H{
				"error": err.Error(),
			},
		)
	}

	jsonUser = *models.FindUser(jsonUser.ID)

	context.JSON(
		http.StatusOK,
		jsonUser,
	)
}