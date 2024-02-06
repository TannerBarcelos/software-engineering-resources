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
	return newDeckFromFile("deck.txt")
}

func deal(d Deck, handSize int) (Deck, Deck) {
	return d[:handSize], d[handSize:]
}

func (d Deck) toString() string {
	return strings.Join(d, ",")
}

func (d Deck) saveToFile(filename string) error {
	data := []byte(d.toString())
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
