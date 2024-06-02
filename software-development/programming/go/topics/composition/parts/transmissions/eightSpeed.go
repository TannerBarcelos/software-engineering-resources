package transmissions

/*
Eight speed transmission is an implementation of the Transmission interface

type Transmission interface {
	ShiftUp()
	ShiftDown()
}

Therefore, it must have the ShiftUp and ShiftDown methods, and then it can have any other methods or logic that is specific to the 8-speed transmission.

*/

type EightSpeedTransmission struct {
	CurrentGear int
}

func (t *EightSpeedTransmission) ShiftUp() {
	println("Shifting up in 8-speed transmission")
	t.CurrentGear++
}

func (t *EightSpeedTransmission) ShiftDown() {
	println("Shifting down in 8-speed transmission")
}

func (t *EightSpeedTransmission) GetCurrentGear() int {
	return t.CurrentGear
}
