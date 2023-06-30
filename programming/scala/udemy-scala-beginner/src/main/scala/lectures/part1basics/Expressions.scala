package lectures.part1basics

object Expressions extends App {
  val x = 1 + 2
  println(x)

  var result:Int = 0 // Assignment operator =
  val sum: Int = 2 + 3 + 4
  println(sum)

  var isEqual: Boolean = 2 == 2 // Relational Operator (also !=, >, <, <=, >=)
  println(isEqual)

  val pemdas: Int = sum + x * 4 / 3 + 2 // Arithmetic operators
  result += pemdas //
  println(pemdas)

  val myName: String = "tanner"
  println(if(myName == "tanner") then s"$myName is my name!" else "my name is not tanner") // string interpolation using s"$var" syntax

  var z = (isEqual = !true) // z is type Unit
  println(z)

  // Code Block
  val xA: Boolean = {
    val myAge: Int = 27
    val LEGAL_AGE: Int = 21
    if (myAge >= LEGAL_AGE) true else false
  }

  // Code Block without Type
  val xB = {
    val myAge: Int = 27
    val LEGAL_AGE: Int = 21
    if (myAge >= LEGAL_AGE) true else false
  }

  // Code Block Returning Unit - Hover over ex and see the type
  val ex = {
    println("Hello")
  }

  println(ex) // <= Hello then ()
  println(if(xA) "I am of legal age" else "Grow up dude!")
}
