package lectures.part2oop

object Inheritance extends App{
  class Animal {
    final protected def eat() : Unit = println("Eating...") // 1 liner - again, in Scala we can omit the () on methods / functions as well if they have no arguments! - Method is also final and protected meaning it cannot be overwritten and it cannot be accessed outside the class / subclasses
    protected def drink() : Unit = { // mul. lines
      println("Drinking...")
    }
  }
  class Dog extends Animal {
    def crunch(): Unit = {
      super.eat() // calling the super class we extend (inherit from)'s eat method (can omit super.)
      println("Crunch Crunch...Bark!")
    }
  }

  val myDog = new Dog // If the class has no constructor / constructor parameters, we can omit the () when instantiating

  myDog.crunch()

  ////////

  // Example using constructor with parameters
  sealed class Person(name:String, age:Int) {
    protected def greeting() : Unit = {
      val greet = s"Hello, my name is $name and I am $age years old"
      println(greet)
    }
  }
  // Note : Parameters without val or var are private values, visible only within the class. We saw this in the other OOP basics packages
  // I added val in front of id below to showcase that this will make id public and therefore accessible outside the class
  class Adult(name:String, age:Int, val id:Int) extends Person(name, age) {
    // Method overrides are nice when you want to share the same methods across classes that inherit from eachother but want to change their internal functionality while maintaining the same
    // method name and possible semantics. I am showcasing this in the code but in reality I could have called super.greeting() and then did more work in the method with a new name of something like def adultGreeting() ={}
    override def greeting() : Unit = {
      val sentence = s"Hello, my name is $name and I am $age years old. I am an adult and my state ID number is $id"
      println(sentence)
    }
  }

  // Creating a new Adult instance using `named arguments` in the parameter list of the class. This is optional! IntelliJ will label for you if you omit them
  // but in other IDEs you either have to name the args, or just leave them unnamed. Both are valid. I personally like the non-named way
  val tanner = new Adult(name = "Tanner", age = 27, id = 1010101)
  tanner.greeting()
  println(tanner.id)
}
