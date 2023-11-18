package lectures.part3fp

object Sequences extends App {
  val aSeq = Seq(1, 2, 3, 4) // BY default a sequence generates a List
  println(aSeq)

  // Sequences are a general trait (interface) for creating sequences like Lists, Vectors, etc. that can be indexed

  println(aSeq.reverse) // O(n)

  println(aSeq(2)) // print the second index (different syntax vs [])

  // sequences allow grabbing the head, tail elemenets as well and also getting size
  println(aSeq.size) // O(1)
  println(aSeq.head) // O(1)
  println(aSeq.tail) // O(1)

  val s = Array(1,2)
  print(s(0))

  // Ranges
  val aRange: Seq[Int] = 0 to 10 // starts from start + 1 to and including 10
  aRange.foreach(println)

  val bRange: Seq[Int] = 0 until 10 // starts from start up to and including 10
  aRange.foreach(println) // note println will be called on every element in the lambda foreach expects. There is no need to write the lambda ourself, but if we did, it would be foreach(x => println(x))

  // 1 liner range
  (1 to 100).foreach(myValue => println(myValue))

  // Lists
  val myList: List[Int] = List(1, 2, 3, 4, 5)
  val mul4: List[Int] = myList.map(_ * 4)
  println(mul4)

  // append to a list (.push() in TS)
  val appended = mul4 :+ mul4(mul4.length - 1) * 4 // appends another value to the list -> should be 20 * 4 and append that reult (80)
  println(appended)

  // prepend is same but left hand operation
  val prepended = 0 +: mul4
  println(prepended)

  // the colon is always next to the List we are appending / prepending to and the + operator goes before : if prepending or after if appending

  // Arrays <- equivalent to Java arrays -> Arrays in Scala are mutable unlike Lists and Ranges
  // completely interoperable with Java arrays and they basically use the same apis as the other sequence collections

  val numbers = Array(5, 10, 15, 20, 25)
  numbers.foreach(println)

  // Vectors
  val vector: Vector[Int] = Vector(5, 10, 15, 20, 25)
  println(vector)
}
