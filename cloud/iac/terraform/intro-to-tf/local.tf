# block_type # block_resource_name_label # block_name_label
resource "local_file" "pet" {
  content  = "Terraform is pretty cool!"    # Content of the file
filename = "${path.module}/tf-cool.txt"     # Name of the file (this is a required field)
  file_permission = "0700"                  # RWE for owner, nothing for group and others
}