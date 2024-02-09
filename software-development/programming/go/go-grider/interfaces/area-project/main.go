package main

import "fmt"

type Shape interface {
	Area() float64
}

type Triangle struct {
	base   float64
	height float64
}

type Square struct {
	sideLength float64
}

func main() {
	triangle := Triangle{
		base:   10,
		height: 40,
	}
	square := Square{
		sideLength: 20,
	}

	printArea(triangle)
	printArea(square)
}

func (t Triangle) Area() float64 {
	return 0.5 * (t.base * t.height)
}

func (s Square) Area() float64 {
	return s.sideLength * s.sideLength
}

func printArea(s Shape) {
	area := s.Area()
	fmt.Println(area)
}
