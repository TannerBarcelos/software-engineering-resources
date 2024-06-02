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
	gear int
}

func (t *EightSpeedTransmission) ShiftUp() {
	t.gear++
	println("Shifting up in 8-speed transmission")
}

func (t *EightSpeedTransmission) ShiftDown() {
	if t.gear > 0 {
		t.gear--
		println("Shifting down in 8-speed transmission")
	} else {
		println("Shift column is stuck. Cannot shift down past 1st gear.")
	}
}

func (t *EightSpeedTransmission) GetCurrentGear() int {
	return t.gear
}
