package main

import (
	"math/rand"
	"os"
	"strings"
	"time"
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
	return newDeckFromFile("deck.txt")
}

// Go supports multiple-return values!
func deal(d Deck, handSize int) (Deck, Deck) {
	return d[:handSize], d[handSize:]
	// gives us a slice of the deck from 0 to handSize (not inclusive)
	// and a slice of the deck from handSize to the end (the remaining cards the "dealer" can deal)
}

func (d Deck) toString() string {
	return strings.Join(d, ",") // join the slice of strings into a single string
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
	return strings.Split(string(data), ",")
}

func (d Deck) shuffle() {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)

	for i := range d {
		newPosition := r.Intn(len(d) - 1)
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}
