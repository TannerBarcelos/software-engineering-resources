package main

import "fmt"

type Transmission struct{}

func (t Transmission) ShiftUp() {
	fmt.Println("Transmission is shifting up")
}

func (t Transmission) ShiftDown() {
	fmt.Println("Transmission is shifting down")
}
