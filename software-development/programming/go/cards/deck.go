package main

// Deck is a string slice which represents a deck of playing cards where each card is a string value
type Deck []string

// This function is a receiver function for the Deck type
// A receiver function is a function that is attached to a type which enables us to call the function on an instance of the type
// In this case, we can call the Print function on an instance of the Deck type to print the deck of cards
// Anything with type Deck can call this function
// Remember: OOP doesn't exist in Go, but this is the closest thing to it
func (d Deck) print() {
	for _, card := range d {
		println(card)
	}
}

func (d Deck) generateCard() string {
	card := "Five of Diamonds"
	return card
}

func (d Deck) generateDeck(deckSize int) Deck {
	for i := 0; i < deckSize; i++ {
		d = append(d, d.generateCard())
	}
	return d
}
