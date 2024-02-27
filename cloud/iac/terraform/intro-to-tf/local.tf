resource "local_file" "pet" {
  content  = "This is a pet"
  filename = "pet.txt"
}