package app

import (
	"errors"
	"github.com/go-chi/chi"
	"github.com/go-chi/render"
	"net/http"
)

// The list of error types returned from account resource.
var (
	ErrUserValidation = errors.New("user validation error")
)

// AccountStore defines database operations for account.
type UserStore interface {
	Get(id int) ()
}

// AccountResource implements account management handler.
type UserResource struct {
	Store UserStore
}

// NewAccountResource creates and returns an account resource.
func NewUserResource(store UserStore) *UserResource {
	return &UserResource{
		Store: store,
	}
}

func (rs *UserResource) router() *chi.Mux {
	r := chi.NewRouter()
	r.Get("/", rs.get)
	return r
}

func (rs *UserResource) get(w http.ResponseWriter, r *http.Request) {
	render.Respond(w, r, "welcome")
}
