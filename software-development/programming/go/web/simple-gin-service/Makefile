.PHONY: build test clean

GOCMD=go
GORUN=$(GOCMD) run
GOBUILD=$(GOCMD) build
GOTEST=$(GOCMD) test
GOCLEAN=$(GOCMD) clean
BINARY_NAME=simple-web-service
ENTRY_POINT_PATH=./cmd/main/

all: test build

run:
	$(GORUN) $(ENTRY_POINT_PATH)main.go

build: 
	$(GOBUILD) -o $(BINARY_NAME) -v

test: 
	$(GOTEST) -v ./...

clean: 
	$(GOCLEAN)
	rm -f $(BINARY_NAME)