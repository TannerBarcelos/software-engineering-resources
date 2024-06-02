package steeringwheels

import "fmt"

type SteeringWheel struct{}

func (sw SteeringWheel) TurnLeft() {
	fmt.Println("Steering wheel is turning left")
}

func (sw SteeringWheel) TurnRight() {
	fmt.Println("Steering wheel is turning right")
}

func (sw SteeringWheel) Honk() {
	fmt.Println("Steering wheel is honking")
}
