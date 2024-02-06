package main

import (
	"os"
	"strings"
)

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

// Go supports multiple-return values!
func deal(d Deck, handSize int) (Deck, Deck) {
	return d[:handSize], d[handSize:]
}

func (d Deck) toString() []byte {
	deckStr := strings.Join(d, ",") // join the slice of strings into a single string
	return []byte(deckStr)          // convert the string to a byte slice for easier file writing
}

type DeckByteSlice []byte

func (d Deck) saveToFile(filename string) error {
	data := DeckByteSlice(d.toString())
	return os.WriteFile(filename, data, 0666)
}

func newDeckFromFile(filename string) Deck {
	data, err := os.ReadFile(filename)
	if err != nil {
		println("Error:", err)
		os.Exit(1)
	}
	deckStr := string(data)
	return strings.Split(deckStr, ",")
}
