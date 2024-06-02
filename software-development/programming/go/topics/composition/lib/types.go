package lib

/*
Defining the contracts for each of the components of the car.

A car can be composed of many components that can be the same "thing" but have different implementations. For example, a car can have a V8 engine, a V6 engine, or a V4 engine. All of these engines are engines, but they are different implementations of the engine interface.

By defining the contracts for each of the components of the car, we can ensure that any type that satisfies the contract can be used in the car. This allows us to create a car that can be composed of any type of engine, steering wheel, or transmission, as long as they satisfy the contract defined by the interface.

So we are using composition with interfaces to define the components of the car, and then we can create a car that is composed of any type of engine, steering wheel, or transmission that satisfies the contract defined by the interface.
*/

type Transmission interface {
	ShiftUp()
	ShiftDown()
	GetCurrentGear() int
}

type SteeringWheel interface {
	TurnLeft()
	TurnRight()
	Honk()
}

type Engine interface {
	Start()
	Stop()
}

// vehicle is an interface that is composed of the engine, steering wheel, and transmission interfaces. This allows us to create a car that is composed of any type of engine, steering wheel, or transmission that satisfies the contract defined by the interface.
// we embed the interfaces so we can access the methods of the embedded interfaces directly from the vehicle interface, regardless of whatever vehicle may ever exist
type Vehicle interface {
	Engine
	SteeringWheel
	Transmission
}
