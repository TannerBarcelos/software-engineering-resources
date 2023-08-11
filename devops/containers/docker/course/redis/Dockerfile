FROM alpine:3.18.3

# Update the package manager (command to be run when the image is built for base linux images)
RUN apk update

## Install redis
RUN apk add redis

# Run the redis server - This is the DEFAULT command that is executed everytime the container is run
# On Docker-Desktop / running docker ps -a the command will be shown as "redis-server" for the container
CMD ["redis-server"]