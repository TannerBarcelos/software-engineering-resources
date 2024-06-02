package transmissions

type EightSpeedTransmission struct{}

func (t EightSpeedTransmission) ShiftUp() {
	println("Shifting up in 8-speed transmission")
}

func (t EightSpeedTransmission) ShiftDown() {
	println("Shifting down in 8-speed transmission")
}
