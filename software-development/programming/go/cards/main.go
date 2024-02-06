package main

func main() {
	deck := newDeck()
	hand, deck := deal(deck, 4)

	hand.print() // again, can call print() since it is a receiver of the Deck type (acting as an instance)
	deck.print()
}
