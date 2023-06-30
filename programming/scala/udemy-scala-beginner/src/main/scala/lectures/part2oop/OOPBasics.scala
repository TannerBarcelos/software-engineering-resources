package lectures.part2oop

object OOPBasics extends App{
  val person = new Person("Tanner", 27) // instantiate of a new person  ('creates a person' in memory) [scala 3 does not require use of 'new' !]
  println(person.age) // Because I made age a val inline in the constructor, it is a class member and I can call it if not marked private
  person.printGreeting()

  // Can access getter by just using dot notation and calling the method without ()
  val name = person.getName
  val age = person.getAge

  println(person) // will print the string representation of the class which I define as an override in the class. This is equivalent to __str__ in python
}

class Person(name:String, val age:Int) {  // This is the constructor. We can make the values members of the class and accessible to the object by putting val / var inline. This is like TypeScript classes and putting const / let in front of constructor values
  // name is a class parameter (because no val/var) but age is a class field (instance variable) that can be accessed by instance directly
  private val greeting: String = s"Hello, my name is ${name} and I am ${this.age} years old" // You DO NOT need to use this unless the method uses a parameter that is named the same as an instance / member variable

  def printGreeting() : Unit = println(greeting)

  /**
   * getter syntax, Can omit () and simply return some member variable
   * https://docs.scala-lang.org/tour/classes.html#:~:text=Private%20Members%20and%20Getter/Setter%20Syntax <- docs
   */
  def getName: String = name
  def getAge: Int = age

  override def toString: String = s"Name: $name - Age: $age"
}