package main

import (
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()

	newDeckSize := len(d)
	const DECK_SIZE int = 52

	if newDeckSize != DECK_SIZE {
		t.Errorf("Expected deck length of %v, but got %v", DECK_SIZE, newDeckSize)
	}
}
