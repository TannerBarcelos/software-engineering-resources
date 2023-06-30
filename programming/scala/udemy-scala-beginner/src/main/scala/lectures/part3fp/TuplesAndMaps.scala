package lectures.part3fp

object TuplesAndMaps extends App {
  // Tuples are like Tuples in Python or TypeScript. They are finite pairs of data that represent something
  // can only hold up to 22 elements
  val aTuple = ("Tanner", 27) // namme, age

  // can also be syntactically sugarfied
  val mySugar = "tanner" -> 27

//  print(aTuple)

  // print first element
//  print(aTuple._1)

  // Maps
  /**
   * Key/value pairs, hashmap
   *
   * Just like Dictionaries in Python or Maps in TS
   *
   * Maps are an immutable collection, so we always need to create new instances when adding or removing
   */

  // Create map
  val myMap: Map[String, Int] = Map(
    ("Tanner" -> 27),
    ("Hayden", 25)
  )

  // add to a map
  val newMap =  myMap + ("Jen" -> 31)

//  print(newMap)

  // print all values in map
  newMap.foreach((key, value) => {
    val output: String = s"$key => $value"
    println(output)
  })
}
