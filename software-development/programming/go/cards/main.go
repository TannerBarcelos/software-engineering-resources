package main

func main() {
	deck := newDeckFromFile("hand.txt")
	hand, deck := deal(deck, 4) // will not modify the original deck since we did not use a pointer
	hand.print()
	hand.saveToFile("hand.txt")
}
