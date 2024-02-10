.PHONY: build test clean

# Vars
BINARY_NAME=main
ENTRY_POINT_PATH=./cmd/main/
OUT_DIR=./bin

# Commands
GOCMD=go
GORUN=$(GOCMD) run
GOBUILD=$(GOCMD) build
GOTEST=$(GOCMD) test
GOCLEAN=$(GOCMD) clean


all: test build

run:
	$(GORUN) $(ENTRY_POINT_PATH)main.go

build: 
	$(GOBUILD) -o $(OUT_DIR)/$(BINARY_NAME) -v $(ENTRY_POINT_PATH)

test: 
	$(GOTEST) -v ./...

clean: 
	$(GOCLEAN)
	rm -f $(BINARY_NAME)