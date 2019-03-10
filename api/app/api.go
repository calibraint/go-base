// Package app ties together application resources and handlers.
package app

import (
	"go.mongodb.org/mongo-driver/mongo"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/sirupsen/logrus"

	"github.com/calibraint/go-rest/database"
	"github.com/calibraint/go-rest/logging"
)

type ctxKey int

const (
	ctxUser ctxKey = iota
)

// API provides application resources and handlers.
type API struct {
	User *UserResource
}

// NewAPI configures and returns application API.
func NewAPI(db *mongo.Database) (*API, error) {
	userStore := database.NewUserStore(db)
	user := NewUserResource(userStore)

	api := &API{
		User: user,
	}
	return api, nil
}

// Router provides application routes.
func (a *API) Router() *chi.Mux {
	r := chi.NewRouter()

	r.Mount("/user", a.User.router())

	return r
}

func log(r *http.Request) logrus.FieldLogger {
	return logging.GetLogEntry(r)
}
