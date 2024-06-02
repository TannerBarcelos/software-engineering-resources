package main

type Vehicle interface {
	Start()
}

func turnOnVehicles(v ...Vehicle) {
	for _, vehicle := range v {
		vehicle.Start()
	}
}

func main() {
	truck := Truck{
		SteeringWheel: SteeringWheel{},
		Engine:        Engine{},
		Transmission:  Transmission{},
	}

	convertable := Convertable{
		SteeringWheel: SteeringWheel{},
		Engine:        Engine{},
		Transmission:  Transmission{},
	}

	turnOnVehicles(truck, convertable)

}
