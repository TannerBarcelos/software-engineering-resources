FROM alpine:3.18.3

# Update the package manager (command to be run when the image is built for base linux images)
RUN apk update

## Install redis
RUN apk add redis

###
# Run the redis server
# * CMD expects an executable program - In this case, it is the redis-server executable which is installed in the container and runs the redis server
# * This is the DEFAULT command that is executed everytime the container is run, meaning a new redis server is created everytime the container gets ran
# * Other CMD examples could be nodejs or python, which would run the nodejs or python server and then the container would be running the server
###
CMD "redis-server"