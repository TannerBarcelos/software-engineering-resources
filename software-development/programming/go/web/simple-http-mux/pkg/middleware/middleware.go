package middleware

import "net/http"

type Middleware func(http.Handler) http.HandlerFunc

// ApplyMiddleware will first apply all the middleware in the order they are passed in, then apply the next handler which will call the route handler (router) to handle the request
func ApplyMiddleware(middleware ...Middleware) Middleware {
	return func(next http.Handler) http.HandlerFunc {
		for i := len(middleware) - 1; i >= 0; i-- {
			next = middleware[i](next)
		}
		return next.ServeHTTP
	}
}
