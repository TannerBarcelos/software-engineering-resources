package main

import "fmt"

type Truck struct {
	SteeringWheel
	Engine
	Transmission
}

func (t Truck) TurnOn4wd() {
	fmt.Println("4WD is on")
}

func (t Truck) TurnOff4wd() {
	fmt.Println("4WD is off")
}
