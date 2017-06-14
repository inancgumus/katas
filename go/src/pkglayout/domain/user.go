package domain

type User struct {
	ID   int
	Name string
}

type UserService interface {
	User(id int) (User, error)
	// Users() ([]*User, error)
	// CreateUser(u *User) error
	// DeleteUser(id int) error
}
