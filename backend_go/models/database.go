package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var db *gorm.DB
var err error

func InitializeDB() {
	db, err = gorm.Open(
		"postgres",
		"user=postgres password=123 dbname=postgres host=localhost port=5432 sslmode=disable",
	)

	if err != nil {
		panic(err)
	}

	db.AutoMigrate(&User{})
}

func CloseDB() {
	db.Close()
}

func ClearDB() {
	db.DropTableIfExists(&User{})
}
