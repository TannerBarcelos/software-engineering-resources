package vehicles

import (
	"fmt"

	"github.com/tannerbarcelos/composition/lib"
)

type SteeringWheel = lib.SteeringWheel
type Engine = lib.Engine
type Transmission = lib.Transmission

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
