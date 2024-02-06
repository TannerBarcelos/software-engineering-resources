package main

func main() {
	deck := newDeck()
	deck.shuffle()
	playersHand, deck := deal(deck, 5)
	playersHand.print()
}
