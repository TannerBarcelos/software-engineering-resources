package main

type Deck []string

// Shows all cards in the deck
func (d Deck) print() {
	for _, card := range d {
		println(card)
	}
}

// Generates a fresh deck of cards to play with
func newDeck() Deck {
	deck := Deck{}
	suits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	values := []string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Jack", "Queen", "King"}

	for _, suit := range suits {
		for _, value := range values {
			deck = append(deck, value+" of "+suit)
		}
	}
	return deck
}
