package controllers

import "github.com/gin-gonic/gin"
import (
	"../models"
	"net/http"
)

func Register(c *gin.Context) {

	var formPerson models.Person

	data := make(map[string]*models.Person)

	c.BindJSON(&formPerson)

	if formPerson.Username == "" || formPerson.Password == "" {
		c.AbortWithStatusJSON(
			http.StatusLengthRequired,
			gin.H{
				"error": "required fields not satisfied",
			},
		)
	}

	person := models.CreatePerson(formPerson.Username, formPerson.Password)

	// TODO: Insert new person into the database

	data["data"] = person
	c.JSON(http.StatusCreated, data)
}
