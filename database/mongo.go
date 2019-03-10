package database

import (
	"context"
	"github.com/spf13/viper"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

// DBConn returns a mongo connection.
func DBConn() (*mongo.Database, error) {
	client, err := mongo.NewClient(options.Client().ApplyURI(viper.GetString("database_url")))

	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()
	err = client.Connect(ctx)

	if err != nil {
		return nil, err
	}

	return client.Database(viper.GetString("database_name")), nil
}
