package vehicles

import "github.com/tannerbarcelos/composition/lib"

type F1Car struct {
	lib.SteeringWheel
	lib.Engine
	lib.Transmission
}
