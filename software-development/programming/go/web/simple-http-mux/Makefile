.PHONY: build up down build-image run-container

# Variables
IMAGE_NAME=simple-mux
PORT=8088
CONTAINER_NAME=simple-mux-service

compose:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

build-image:
	docker build -t ${IMAGE_NAME} .

run-container:
	docker run -d -p ${PORT}:${PORT} -e PORT=${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}