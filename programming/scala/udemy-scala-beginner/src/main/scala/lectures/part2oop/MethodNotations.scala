package lectures.part2oop

object MethodNotations extends App{
  class Person(val name: String, val favMovie: String) {
    def likes(movie: String) : Boolean = movie == favMovie

    def hangsOutWith(person: Person) : String = {
      val sentence: String = s"${this.name} hangs out with ${person.name}"
      sentence
    }

    def isAlive() : Boolean = true

    /**
     * The apply method is a special method that is called whenever you instantiate a new class
     */
    def apply() : String = s"I represent the Person class for the person object ${this.name}"
  }

  val tanner = new Person("Tanner", "Avengers")
  val hayden = new Person("Hayden", "Infinity War")

  println(tanner.likes("Avengers")) // dot notation (also called postfix notation)
  println(tanner likes "Avengers") // infix notation. Reads like english! (Considered 'Syntactic Sugar') and only works with 1 param [or else put in parens]
  // It is format of object method parameter to method

  // Again, same using dot notation and infix notation
  println(tanner.hangsOutWith(hayden))
  println(tanner hangsOutWith hayden)

  println(tanner.isAlive())

  println(tanner())
}
