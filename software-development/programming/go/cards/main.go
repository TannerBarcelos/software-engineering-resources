package main

func main() {
	deck := newDeck()
	hand, deck := deal(deck, 4) // will not modify the original deck since we did not use a pointer

	hand.print() // again, can call print() since it is a receiver of the Deck type (acting as an instance)
	deck.print()
}
