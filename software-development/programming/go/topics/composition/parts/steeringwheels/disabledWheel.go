package steeringwheels

import "fmt"

type DisabledWheel struct{}

func (dw DisabledWheel) TurnLeft() {
	fmt.Println("Turning left")
}

func (dw DisabledWheel) TurnRight() {
	fmt.Println("Turning right")
}

func (dw DisabledWheel) Honk() {
	fmt.Println("The horn is disabled for this vehicle")
}
