package lectures.part1basics

object StringOps extends App{

  val name: String = "Tanner"
  val age: Int = 27

  // S string interpolator
  val myName: String = s"Hello, my name is $name and I am $age years old"

  // RAW string interpolator
  val newLine: String = "I like the 49ers\nI like football"
  println(raw"$newLine")
//  println("I like the 49ers\nI like football") <- Also valid

  println(myName.charAt(myName.length - 1)) // Will print last character in string (also .length get string len)
  println(myName.substring(7, 11)) // Will print "my n" (prints from start index to end index - 1)
  println(myName.split("").toList) // Splits string by character and converts to a List (array structure)
  println(myName.replace(" ", "****"))
  println(myName.toUpperCase())
  println(myName.toLowerCase())
  println(myName.reverse)
  println(myName.repeat(5))

  // See docs for more
}
