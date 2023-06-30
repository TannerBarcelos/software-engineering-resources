package lectures.part4pm

import scala.util.Random

object PatternMatching extends App {

  val randomInt = new Random()
  val x = randomInt.nextInt(10) // generates number between 0 and 10

  // Let's do a pattern match! Pattern Matches are like switch cases on steroids
  // Do not need {} but I like to make my expressions explicitly outlined as a block using {}
  val desc = x match {
    case 1 => "The one"
    case 2 => "Not the one"
    case 3 => "3rd time is a charm"
    case _ => "Welp, I am meaningless"
  }

  println(desc)
  case class Person(val name:String, val age: Int)
  val bob = Person("Bob", 20)

  // We can match against classes as well. The member variables can be extracted from the matcher in-line!
  val greeting = bob match {
    // This is called extractor pattern of case classes
    case Person(name, age) if age < 21 => s"Hi, my name is $name and since I am $age, I cannot drink in the US"
    case Person(name, age) => s"Hi, my name is $name and I am $age years old"
    case _ => "I do not know who I am" // default case
  }
  println(greeting)
}
