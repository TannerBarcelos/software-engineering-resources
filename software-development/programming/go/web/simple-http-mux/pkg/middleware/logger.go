package middleware

import (
	"log"
	"net/http"
)

func RequestLoggerMiddleware(next http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Request URI: %s", r.RequestURI)
		next.ServeHTTP(w, r) // moves to the next function in the chain, which could either be the handler or another middleware (either is valid because both are http.Handler types due to the ServeHTTP method)
	}
}
