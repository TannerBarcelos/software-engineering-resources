package engines

import "fmt"

type Engine struct{}

func (e Engine) Start() {
	fmt.Println("Engine is starting")
}

func (e Engine) Stop() {
	fmt.Println("Engine is stopping")
}
