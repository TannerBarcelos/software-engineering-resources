package main

import "fmt"

// Capitalization is important in Go. If a function or variable is capitalized, it is exported and can be used outside of the package. If it is lowercase, it is private and can only be used within the package.
type Bot interface {
	getGreeting() string // This is a method that all bots must implement
	getBotVersion() float64
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

	printVersion(eBot)
	printVersion(sBot)
}

func printGreeting(b Bot) {
	fmt.Println(b.getGreeting())
}

func printVersion(b Bot) {
	fmt.Println(b.getBotVersion())
}

// If not using the receiver, you can remove the receiver from the method signature and just use the type name
func (eb EnglishBot) getGreeting() string {
	// .... Some very custom logic for generating an English greeting (pretend it's complicated)
	return "Hi there! I am the " + eb.BotName
}

func (eb EnglishBot) getBotVersion() float64 {
	return 1.0
}

func (sb SpanishBot) getGreeting() string {
	// .... Some very custom logic for generating a Spanish greeting (pretend it's complicated)
	return "Hola! Soy el " + sb.BotName
}

func (sb SpanishBot) getBotVersion() float64 {
	return 1.0
}
