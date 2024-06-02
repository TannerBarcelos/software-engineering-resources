package transmissions

import "fmt"

type Transmission struct {
	gear int
}

func (t *Transmission) ShiftUp() {
	t.gear++
	fmt.Println("Transmission is shifting up")
}

func (t *Transmission) ShiftDown() {
	t.gear--
	fmt.Println("Transmission is shifting down")
}

func (t *Transmission) GetCurrentGear() int {
	return t.gear
}
