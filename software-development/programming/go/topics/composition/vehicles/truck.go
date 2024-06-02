package vehicles

import (
	"fmt"

	"github.com/tannerbarcelos/composition/lib"
)

type Truck struct {
	lib.SteeringWheel
	lib.Engine
	lib.Transmission
}

func (t Truck) TurnOn4wd() {
	fmt.Println("4WD is on")
}

func (t Truck) TurnOff4wd() {
	fmt.Println("4WD is off")
}
