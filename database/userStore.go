package database

import (
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
)

// UserStore implements database operations for user management.
type UserStore struct {
	db *mongo.Database
}

// NewUserStore returns an UserStore.
func NewUserStore(db *mongo.Database) *UserStore {
	return &UserStore{
		db: db,
	}
}

// Get an user by ID.
func (s *UserStore) Get(id int) () {
	fmt.Println("Get an user by id called")
}
