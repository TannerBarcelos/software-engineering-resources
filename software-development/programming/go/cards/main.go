package main

func main() {
	cardDeck := Deck{}
	cardDeck = cardDeck.generateDeck(10) // if using pointer receiver, then no need to assign to cardDeck but that is for later
	cardDeck.print()
}
