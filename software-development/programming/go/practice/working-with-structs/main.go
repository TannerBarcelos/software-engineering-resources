package main

func main() {
	users := Users{}
	users.AddUser(NewUser("Bob", "Doe", "test@test.com", 23))
	users.AddUser(NewUser("John", "Doe", "test2@gmail.com", 25))
	users.PrintUsers()
}
