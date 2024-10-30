package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Welcome to the world of animals.")
	})

	r.GET("/animals", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"animals": map[string]string{"animals": "apple"}})
	})

	if err := r.Run(":5000"); err != nil {
		log.Fatal(err)
	}
}
