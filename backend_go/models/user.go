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
	Password string `json:"-"`
	Token    string `json:"token"`
}

// a local array to store the registered users
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

	// TODO: What to do with the token?
	newUser := User{uint(len(userList)), username, password, ""}

	userList = append(userList, newUser)

	return &newUser, nil
}

func IsUserValid(username, password string) bool {
	for _, currentUser := range userList {
		if currentUser.Username == username && currentUser.Password == password {
			return true
		}
	}
	return false
}