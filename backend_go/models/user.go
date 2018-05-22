package models

import (
	"math/rand"
	"strconv"
	"errors"
	"strings"
)

func generateSessionToken() string {
	// We're using a random 16 character string as the session token
	return strconv.FormatInt(rand.Int63(), 16)
}

type User struct {
	ID       uint   `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Token    string `json:"token"`
}

// A local array to store the registered users
var userList = []User{
	{0, "admin", "qwerty", ""},
}

func RegisterUser(username, password string) (*User, error) {

	if strings.TrimSpace(username) == "" {
		return nil, errors.New("the username can't be empty")
	}

	if strings.TrimSpace(password) == "" {
		return nil, errors.New("the password can't be empty")
	}

	for _, currentUser := range userList {
		if currentUser.Username == username {
			return nil, errors.New("the username isn't available")
		}
	}

	newUser := User{uint(len(userList)), username, password, generateSessionToken()}

	userList = append(userList, newUser)

	return &newUser, nil
}

// Checks the given username/password combination and return token,
// if the combination is correct
func LoginUser(username, password string) (string, bool) {

	for i := 0; i < len(userList); i++ {
		if userList[i].Username == username && userList[i].Password == password {
			userList[i].Token = generateSessionToken()
			return userList[i].Token, true
		}
	}

	return "", false
}