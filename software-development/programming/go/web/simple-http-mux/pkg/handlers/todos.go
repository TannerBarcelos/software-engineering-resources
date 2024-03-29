package handlers

import "net/http"

// RegisterTodoRoutes registers todo routes and is prefixed with /api/v1 from root router
func RegisterTodoRoutes(router *http.ServeMux) {
	router.HandleFunc("GET /todos", getTodosHandler)
	router.HandleFunc("GET /todos/{id}", getTodoHandler)
}

func getTodosHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello, all todos!"))
}

func getTodoHandler(w http.ResponseWriter, r *http.Request) {
	todoId := r.PathValue("id")

	if todoId == "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("missing todo id"))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello, todo " + todoId))
}
