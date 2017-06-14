package fake

import "pkglayout/domain"

type UserService struct {
	Called bool
}

func NewUserService() UserService {
	return UserService{Called: false}
}

func (u *UserService) User(id int) (domain.User, error) {
	u.Called = true
	return domain.User{ID: 101, Name: "fake"}, nil
}
