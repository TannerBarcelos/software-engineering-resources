package vehicles

import (
	"fmt"

	"github.com/tannerbarcelos/composition/lib"
)

type Convertable struct {
	lib.SteeringWheel
	lib.Engine
	lib.Transmission
}

func (c Convertable) LowerRoof() {
	fmt.Println("Roof is lowered")
}

func (c Convertable) RaiseRoof() {
	fmt.Println("Roof is raised")
}
