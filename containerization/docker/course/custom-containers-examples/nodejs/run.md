## About this Dockerfile

This Dockerfile is used to build a Docker image for Node.js. It is based on the official Node.js Docker image. It is intended to be used as a base image for other images using Node.js i.e an express app that is Dockerized.

See [Dockerhub Repo Here](https://hub.docker.com/repository/docker/tannermbarcelos/node/general)

### How to build this Dockerfile as an image

```bash
docker build -t tannermbarcelos/node -f Dockerfile.node .
```

### How to run this image as a container

> This will run the Nodejs repl attaching to your current terminal session

```bash
docker run -it --name node tannermbarcelos/node
```

At this point, if you quit the repl, the container will exit and you will have to start it again.

```bash
docker start node
```

To attach to the container again, run the following command

```bash
# Run Nodejs repl
docker exec -it node node

# or

# Run a shell in the container (since it uses alpine)
docker exec -it node /bin/bash
```

Lastly, to stop the container, run the following command

```bash
docker stop node
```
