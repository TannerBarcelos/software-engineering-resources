package main

import "fmt"

type Convertable struct {
	SteeringWheel
	Engine
	Transmission
}

func (c Convertable) LowerRoof() {
	fmt.Println("Roof is lowered")
}

func (c Convertable) RaiseRoof() {
	fmt.Println("Roof is raised")
}
