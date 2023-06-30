package lectures.part4pm

object PatternsEverywhere extends App {
  try {
    throw RuntimeException("This is a runtime exception")
  }catch {
    case rte: RuntimeException => println(rte)
    case npe: NullPointerException => println(npe)
    case _ => "Catch all"
  }

  // Common Usecase - using pattern matching while constructing a new list (.map() with match)
  // This is very useful to run "switch statements (pattern matching)" on a List and return some new list. THink of it like running .map() in TypeScript on an array to create a new array with new data from some conditions checked using switch() {}
  val myList: List[Int] = List(1, 2, 3, 4, 5)
  val mappedList = myList.map {
    case e if e % 2 == 0 => s"$e is even"
    case o if o % 2 == 1 => s"$o is odd"
    case _ => "Is something else"
  }

  for {
    value <- mappedList
  } println(value)
}
