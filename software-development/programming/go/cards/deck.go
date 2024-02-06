package main

import (
	"math/rand"
	"os"
	"strings"
	"time"
)

type Deck []string

func (d Deck) print() {
	for _, card := range d {
		println(card)
	}
}

func newDeck() Deck {
	cards := Deck{}

	// Slice of strings for suits and values
	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards
}

func deal(d Deck, handSize int) (Deck, Deck) {
	return d[:handSize], d[handSize:]
}

func (d Deck) toString() string {
	return strings.Join(d, ",")
}

func (d Deck) saveToFile(filename string) error {
	data := []byte(d.toString()) // Convert string slice of cards to string and then to byte slice for writing to file
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
