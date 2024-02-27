resource "local_file" "pet" {
  content  = "This is a pet"
  filename = "pet.txt"
  file_permission = "0700" # RWE for owner, nothing for group and others
}