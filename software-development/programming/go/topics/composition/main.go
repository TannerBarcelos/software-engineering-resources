package main

import (
	"fmt"

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
		Transmission:  &transmissions.EightSpeedTransmission{}, // this transmission has many methods, but it also has the methods to satisfy the Transmission interface which is required by of a Truck
	}

	convertable := vehicles.Convertable{
		SteeringWheel: steeringwheels.SteeringWheel{},
		Engine:        engines.Engine{},
		Transmission:  &transmissions.Transmission{},
	}

	f1Car := vehicles.F1Car{
		SteeringWheel: steeringwheels.DisabledWheel{},
		Engine:        engines.F1Engine{},
		Transmission:  &transmissions.EightSpeedTransmission{},
	}

	vehicles := []lib.Vehicle{truck, convertable, f1Car}

	turnOnVehicles(vehicles...)
	turnOffVehicles(vehicles...)
	honkVehicles(vehicles...)

	truck.ShiftUp()

	// GetCurrentGear is not a direct function on itself, but it comes from the embedded transmission we composed the truck with.
	// Think of it like a real car: the transmission is installed into the car and has the ability to shift, as well as provide feedback back to the car, what
	// gear it is currently in. The truck simply displays that information, but the transmission is the one that actually has the logic to determine what gear it is in, and how to shift up or down.
	// The reason we can access that method on the truck itself is because the truck is composed of the transmission, and the transmission has the GetCurrentGear method which is embedded into the truck, i.e. installed on the truck.
	fmt.Println(truck.GetCurrentGear())

}
