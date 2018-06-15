package middlewares

import (
	"github.com/gin-gonic/gin"
	"../models"
	"net/http"
)


func IsAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		var jsonUser models.User
		c.BindJSON(&jsonUser)

		id := jsonUser.ID

		if token := c.GetHeader("Auth"); token == "" {
			c.AbortWithStatusJSON(
				http.StatusUnauthorized,
				gin.H{
					"error": "authentication required",
				},
			)
		} else {
			dbUser := models.FindUser(id)
			if dbUser == nil || dbUser.Token != token {
				c.AbortWithStatusJSON(
					http.StatusForbidden,
					gin.H{
						"error": "invalid credentials",
					},
				)
			}
		}

		c.Set("user", jsonUser)
		c.Next()
	}
}