package main

import (
	"github.com/tannerbarcelos/composition/lib"
	"github.com/tannerbarcelos/composition/parts/engines"
	"github.com/tannerbarcelos/composition/parts/steeringwheels"
	"github.com/tannerbarcelos/composition/parts/transmissions"
	"github.com/tannerbarcelos/composition/vehicles"
)

func turnOnVehicles(v ...lib.Vehicle) {
	for _, vehicle := range v {
		vehicle.Start()
	}
}

func turnOffVehicles(v ...lib.Vehicle) {
	for _, vehicle := range v {
		vehicle.Stop()
	}
}

func honkVehicles(v ...lib.Vehicle) {
	for _, vehicle := range v {
		vehicle.Honk()
	}
}

func main() {
	truck := vehicles.Truck{
		SteeringWheel: steeringwheels.SteeringWheel{},
		Engine:        engines.V8engine{},
		Transmission:  transmissions.EightSpeedTransmission{},
	}

	convertable := vehicles.Convertable{
		SteeringWheel: steeringwheels.SteeringWheel{},
		Engine:        engines.Engine{},
		Transmission:  transmissions.Transmission{},
	}

	f1Car := vehicles.F1Car{
		SteeringWheel: steeringwheels.DisabledWheel{},
		Engine:        engines.F1Engine{},
		Transmission:  transmissions.EightSpeedTransmission{},
	}

	vehicles := lib.CarList{truck, convertable, f1Car}

	turnOnVehicles(vehicles...)
	turnOffVehicles(vehicles...)
	honkVehicles(vehicles...)

}
