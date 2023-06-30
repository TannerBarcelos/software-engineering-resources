package lectures.part3fp

object MapFMFilterFor extends App {

  val lst : List[Int] = List(1, 2, 3, 4, 5) // I used the generic to strictly type lst but inference is awesome for things like this

  // foreach - iterates over every element in a collection and FOR EACH element, performs some operation without mutation the original collection
  lst.foreach(element => println(element))

  // map -> HOF that is used to transform each element of a collection and return a new collection - does not mutate the original collection (List in this case). This is just like Array.map() in TS
  val doubled = lst.map(_ * 2) // using the _ syntax we saw from FP object in this package. This is how most of the HOFs are written for collections
  println(doubled)

  // filter - returns a new collection with applied filter
  val onlyEvens = lst.filter(_ % 2 == 0) // or equivalently .filter(x => x % 2 == 0)
  println(onlyEvens)

  // For Comprehension (essentially a for loop)
  for {
    n <- lst
  } println(n)

  // For comprehension using () - this feels more like a loop syntax
  val words = Array("hello", "world", "scala")
  for (word <- words) {
    println(word)
  }

  // Range-based for comprehension (loop from start to some arbitrary number)
  for {
    i <- 1 to 10
  } println(i)

  // Or using parens
  for(i <- 1 to 100 if i % 2 == 0) {
    println(i)
  }

  // for-comprehension to generate a new collection using yield
  // Write a for-comprehension that will generate a new collection of all the odd numbers from 1 to 100
  val odds = for(i <- 1 to 100 if i % 2 == 1) yield i
  println(odds) // Vector type

  // for comprehension on List of tuples
  val pairs = List(("a", 1), ("b", 2), ("c", 3))
  for ((letter, number) <- pairs) {
    println(letter + " " + number)
  }

  // Print from 1 to 100 by 10's
  for {
    y <- 1 to 100 if y % 10 == 0
  } println(y)

  // also valid
  for(y <- 1 to 100 if(y % 10) == 0) println(y)

  // Notice if statements can have optional () or not around them

  // Everyhing in Scala can be a block expression, thus for comprehensions, if statements, functions etc. can
  // all be written in different ways

}

/*
  At this point it feels lik JavaScript! This is how a lot of the code is written for work, so it will feel the same
*/