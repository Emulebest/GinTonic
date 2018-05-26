package models

import "github.com/jinzhu/gorm"

var database *gorm.DB
var err error

func InitializeDB() error {
	database, err = gorm.Open(
		"postgres",
		"user=postgres password=123 dbname=postgres host=localhost port=5432 sslmode=disable",
	)

	if err == nil {
		database.AutoMigrate(&User{})
	}

	return err
}

func ClearDB() {
	database.DropTableIfExists(&User{})
}
