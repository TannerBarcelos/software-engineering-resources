package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()

	newDeckSize := len(d)
	const DECK_SIZE int = 52

	if d[0] != "Ace of Spades" {
		t.Errorf("Expected first card of Ace of Spades, but got %v", d[0])
	}

	if newDeckSize != DECK_SIZE {
		t.Errorf("Expected deck length of %v, but got %v", DECK_SIZE, newDeckSize)
	}
}

func TestSaveDeckAndLoad(t *testing.T) {
	d := newDeck()
	const DECK_SIZE int = 52
	const FILENAME string = "_decktesting"

	err := d.saveToFile(FILENAME)

	if err != nil {
		t.Errorf("Error: %v", err)
	}

	loadedDeck := newDeckFromFile(FILENAME)
	loadedDeckSize := len(loadedDeck)

	if loadedDeckSize != DECK_SIZE {
		t.Errorf("Expected deck length of %v, but got %v", DECK_SIZE, loadedDeckSize)
	}

	os.Remove(FILENAME)
}
