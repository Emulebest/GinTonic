package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetUserInfo(context *gin.Context) {
	user := context.MustGet("user")

	context.JSON(
		http.StatusOK,
		user,
	)
}