package api

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/tannerbarcelos/mux/pkg/handlers"
	"github.com/tannerbarcelos/mux/pkg/middleware"
)

type APIServer struct {
	addr string
	// any other dependencies
}

func NewApiServer(addr string) *APIServer {
	return &APIServer{
		addr: fmt.Sprint(":", addr), // prefixing with a colon to make it a valid address (port is given as an env var via os.Getenv("PORT") in main.go using .env or docker compose and we do not need to prefix it with a colon in those files)
	}
}

func (s *APIServer) Start() error {

	router := http.NewServeMux()

	registerRoutes(router)

	providedMiddleware := middleware.ApplyMiddleware(middleware.RequestLoggerMiddleware)

	server := http.Server{
		Addr:    s.addr,
		Handler: providedMiddleware(router),
	}

	log.Printf("starting server on port %s", strings.TrimPrefix(s.addr, ":"))

	return server.ListenAndServe()
}

func registerRoutes(router *http.ServeMux) {
	router.HandleFunc("/health", handlers.HealthcheckHandler)

	apiV1Router := http.NewServeMux()

	router.Handle("/api/v1/", http.StripPrefix("/api/v1", apiV1Router)) // This is one thing that gets abstracted away when using a framework

	handlers.RegisterTodoRoutes(apiV1Router)

}
