package models

import (
	"math/rand"
	"strconv"
	"errors"
	"regexp"
)

func generateSessionToken() string {
	// We're using a random 16 character string as the session token
	return strconv.FormatInt(rand.Int63(), 16)
}

type User struct {
	ID         uint   `json:"id"       gorm:"primary_key"`
	Username   string `json:"username" gorm:"unique;not null"`
	Password   string `json:"password"`
	Token      string `json:"token"    gorm:"unique;not null"`
	FirstName  string `json:"firstName"`
	SecondName string `json:"secondName"`
	Email      string `json:"email"`
}

func RegisterUser(username, password string) (*User, error) {

	usernameRegexp, _ := regexp.Compile("^\\w{4,15}$")

	if !usernameRegexp.MatchString(username) {
		return nil, errors.New("the username must contain from 4 to 15 characters that are digits, letters, or underscore")
	}

	passwordRegexp, _ := regexp.Compile("^\\w{4,15}$")

	if !passwordRegexp.MatchString(password) {
		return nil, errors.New("the password must contain from 4 to 15 characters that are digits, letters, or underscore")
	}

	// TODO: Check for unique username because annotation doesn't work

	newUser := User{
		0,
		username,
		password,
		generateSessionToken(),
		"",
		"",
		"",
	}

	// the function recounts the ID by itself
	database.Create(&newUser)

	return &newUser, nil
}

func LoginUser(username, password string) (*User, error) {

	// TODO: All is todo

	return nil, errors.New("the username/password combination is incorrect")
}
