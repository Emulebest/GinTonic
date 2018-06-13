package models

import (
	"errors"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"math/rand"
	"regexp"
	"strconv"
	"time"
)

var isSeed = false

func generateSessionToken() string {
	if !isSeed {
		rand.Seed(time.Now().UTC().UnixNano())
		isSeed = true
	}
	return strconv.FormatInt(rand.Int63(), 16)
}

type User struct {
	ID         uint   `json:"id"       gorm:"primary_key"`
	Username   string `json:"username" gorm:"unique;not null"`
	Password   string `json:"password"`
	Token      string `json:"token"    gorm:"unique;not null"`
	FirstName  string `json:"firstName"`
	SecondName string `json:"secondName"`
	Email      string `json:"email"    gorm:"unique;not null"`
}

func RegisterUser(username, password, email string) (*User, error) {

	usernameRegexp, _ := regexp.Compile("^\\w{4,15}$")

	if !usernameRegexp.MatchString(username) {
		return nil, errors.New("the username must contain from 4 to 15 characters that are digits, letters, or underscore")
	}

	passwordRegexp, _ := regexp.Compile("^\\w{4,15}$")

	if !passwordRegexp.MatchString(password) {
		return nil, errors.New("the password must contain from 4 to 15 characters that are digits, letters, or underscore")
	}

	emailRegexp, _ := regexp.Compile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

	if !emailRegexp.MatchString(email) {
		return nil, errors.New("the email is not valid")
	}

	// Aborting registration if a sameUser with the same username is found,
	// because GORM annotations don't work.
	var sameUser User // initially null-fields
	db.First(&sameUser, "username = ?", username)
	if sameUser.Username == username {
		return nil, errors.New("the username is not unique")
	}

	// Similarly to the email.
	db.First(&sameUser, "email = ?", email)
	if sameUser.Email == email {
		return nil, errors.New("the email is not unique")
	}

	newUser := User{
		0,
		username,
		password,
		generateSessionToken(),
		"",
		"",
		email,
	}

	// The function recounts the ID by itself.
	db.Create(&newUser)

	// Checking the result of the insert.
	db.First(&sameUser, "username = ?", username)
	if sameUser.Username != username {
		return nil, errors.New("database connection failed")
	}

	return &newUser, nil
}

func LoginUser(username, email, password string) (*User, error) {

	var user User
	if username != "" {
		db.First(&user, "username = ?", username)

		if user.Username != username {
			return nil, errors.New("the username doesn't exist")
		}

	} else if email != "" {
		db.First(&user, "email = ?", email)

		if user.Email != email {
			return nil, errors.New("the email doesn't exist")
		}
	}

	if user.Password != password {
		return nil, errors.New("the password is incorrect")
	}

	return &user, nil
}
