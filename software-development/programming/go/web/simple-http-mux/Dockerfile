# Use the official Go image as the base image
FROM golang:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the Go application
RUN go build -o main ./cmd/main/main.go

# Expose the port that the web server will listen on (comes from the environment variable at run time -e PORT=8088 or docker-compose.yml file) 
EXPOSE ${PORT}

# Set the entry point for the container
CMD ["./main"]

# Build this file - docker build -t simple-mux .
# Run this file - docker run -p 8088:8088 -e PORT=8088 --name simple-mux simple-mux