package main

import "fmt"

type Bot interface {
	getGreeting() string // This is a method that all bots must implement
}

type EnglishBot struct {
	// ... Some custom data for the EnglishBot
	BotName string
}
type SpanishBot struct {
	// ... Some custom data for the SpanishBot
	BotName string
}

func main() {
	eBot := EnglishBot{
		BotName: "EnglishBot",
	}
	sBot := SpanishBot{
		BotName: "SpanishBot",
	}

	printGreeting(eBot) // eBot is of type EnglishBot, which implements the Bot interface because it has the getGreeting method, therefore it is also of type Bot and can be passed to the printGreeting function
	printGreeting(sBot)
}

func printGreeting(b Bot) {
	fmt.Println(b.getGreeting())
}

// If not using the receiver, you can remove the receiver from the method signature and just use the type name
func (eb EnglishBot) getGreeting() string {
	// .... Some very custom logic for generating an English greeting (pretend it's complicated)
	return "Hi there! I am the " + eb.BotName
}

func (sb SpanishBot) getGreeting() string {
	// .... Some very custom logic for generating a Spanish greeting (pretend it's complicated)
	return "Hola! Soy el " + sb.BotName
}
