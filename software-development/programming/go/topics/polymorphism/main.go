package main

import "fmt"

type Product interface {
	GetPrice() float64
	GetProductInfo() string
}

type Book struct {
	Title  string
	Author string
	Price  float64
}

type Shirt struct {
	Size  int
	Color string
	Price float64
}

func NewBook(title, author string, price float64) Book {
	return Book{title, author, price}
}

func (b Book) GetPrice() float64 {
	return b.Price
}

func (b Book) GetProductInfo() string {
	return fmt.Sprintf("Book: %s - %s", b.Title, b.Author)
}

func NewShirt(size int, color string, price float64) Shirt {
	return Shirt{size, color, price}
}

func (s Shirt) GetPrice() float64 {
	return s.Price
}

func (s Shirt) GetProductInfo() string {
	return fmt.Sprintf("Shirt: %s - Size: %d", s.Color, s.Size)
}

func CalculateTotalCart(products []Product) float64 {
	total := 0.0
	for _, product := range products {
		total += product.GetPrice()
	}
	return total
}

func main() {

	book := NewBook("The Alchemist", "Paulo Coelho", 10.50)
	shirt := NewShirt(14, "Blue", 15.00)

	products := []Product{book, shirt}

	fmt.Println("Cart Summary")
	fmt.Println("------------")
	for _, product := range products {
		fmt.Printf("%s: $%.2f\n", product.GetProductInfo(), product.GetPrice())
	}

	total := CalculateTotalCart(products)
	fmt.Println("------------")
	fmt.Printf("Total: $%.2f\n", total)
}
