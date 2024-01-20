# This Dockerfile creates a custom, nodejs based image to be published to my docker hub
# so I can use it for future projects. It is based on the official nodejs image, but adds 
# some additional packages that I use frequently / custom npm config.

ARG NODE_VERSION=lts-alpine3.18 

FROM node:${NODE_VERSION}

# Some packages might never be used, but I like to have them available just in case
RUN apk update && apk upgrade && \
    apk add --no-cache \ 
    bash git openssh openssl curl wget

CMD ["node"]
