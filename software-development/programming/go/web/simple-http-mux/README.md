![Go](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png)

![docker](https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png)

## Introduction

This is a simple REST API using the latest Go 1.22 http server and mux router. It showcases how we can build a REST service without needing to reach for a framework.

## Setup Instructions

### Using Docker

> The great thing about using Docker is that you don't need to have Go installed on your machine! Just have Docker installed and you're good to go!

```bash
Make compose
```

**Want to build and run the container manually?**

```bash
docker build -t simple-mux .
docker run -p <some_port_local>:<some_port> -e PORT=<some_port> --name simple-mux-server simple-mux
```

### Without Docker

> Not recommended as you need to have Go installed on your machine

````bash

1. Create a `.env` file in the root directory and add the following values

```bash
PORT=<some_port> # this can differ from what you see in the Dockerfile / docker-compose.yml file because the Dockerfile / docker-compose.yml file overrides the .env file when not developing locally
````

#### A note on `.env` file

- The `.env` file is used to store environment variables that are used by the application. In this case, we are storing the port number that the server will run on.
- The `.env` file is ignored by git and will not be committed to the repository. This is to prevent sensitive information from being exposed.
- The `.env` file is read by the `godotenv` package in Go. This package reads the `.env` file and sets the environment variables in the file. **This is only used in development and should not be used in production.**
- In non development environments, the environment variables should be set in the environment itself via the command line or a configuration file. In the case of Docker, the environment variables are set in the `Dockerfile` or `docker-compose.yml` file. And in Kubernetes, the environment variables are set in the `deployment.yaml` file on the pod spec (which maps to a container).

> You will see the `.env` in the container if you `docker exec` into it, but it is overriden by the environment variables set in the `Dockerfile` or `docker-compose.yml` file because the environment variables set in the `Dockerfile` or `docker-compose.yml` file take precedence over the `.env` file. This is a fundamental concept in Docker and Kubernetes, so please keep this in mind.
