package engines

type F1Engine struct{}

func (f F1Engine) Start() {
	println("F1 engine is starting")
}

func (f F1Engine) Stop() {
	println("F1 engine is stopping")
}
