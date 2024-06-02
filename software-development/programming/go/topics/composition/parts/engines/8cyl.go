package engines

type V8engine struct{}

func (v V8engine) Start() {
	println("V8 engine is starting")
}

func (v V8engine) Stop() {
	println("V8 engine is stopping")
}
