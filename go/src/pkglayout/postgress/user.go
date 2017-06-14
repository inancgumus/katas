package postgress

import (
	"database/sql"
	"pkglayout/domain"
)

// UserService represents a PostgreSQL implementation of domain.UserService.
type UserService struct {
	DB *sql.DB
}

func NewUserService(DB *sql.DB) UserService {
	return UserService{
		DB,
	}
}

// User returns a user for a given id.
func (s UserService) User(id int) (domain.User, error) {
	return domain.User{ID: id, Name: "inanc"}, nil
}
