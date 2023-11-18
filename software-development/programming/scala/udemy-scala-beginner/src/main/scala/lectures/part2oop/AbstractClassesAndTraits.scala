package lectures.part2oop

object AbstractClassesAndTraits extends App{

  // Abstract classes are meant to be extended and NOT implemented / instantiated. They are blueprints for what other
  // classes MUST implement (at the minimum).

  abstract class Animal {
    val creatureType: String
    def eat() : Unit
  }

  class Dog(val name:String) extends Animal {
    val creatureType: String = "Dog"
    def eat(): Unit = {
      println("Crunch..Crunch")
    }
    def name_() : String = this.name
  }

  val doggie = new Dog("Willow")
  doggie.eat()

  ///////

  /**
   * What happens when we need to create a class that extends from multiple other classes? In Scala, you can only
   * extend from 1 class however there is a feature called Traits which are like classes and they allow classes
   * to inherit from MANY of them or none, up to the requirements
   *
   * In Scala, a trait is a reusable component that can be mixed in with one or more classes to provide additional
   * behavior. Traits are similar to interfaces in other programming languages, but they can also contain method
   * implementations and fields! This means they do not need to only provide the signatures, they can implement as well!
   *
   * A trait can be declared using the trait keyword followed by its name, and it can contain method definitions,
   * field definitions, and other Scala language features. Here's an example:
   */

  trait Carnivore {
    def eat(animalType: Animal): Unit // method definition
    val preferredFood: String = "Red meat" // field implementation
  }

  class TRex extends Animal with Carnivore {
    val creatureType: String = "Trex Dinosaur"

    def eat() : Unit = {
      println("Rawwwrrrrrrrrr")
    }

    def eat(animalType: Animal): Unit = {
      println(s"I'm a $creatureType and I am eating a small little ${animalType.creatureType}")
    }

    /**
     * So this begs the question : Why traits vs abstract classes? They seem exactly the same, only offering to classes
     * the ability to extend from many of them?
     *
     * - Traits do not have constructors
     * - Multiple traits can be inherited by a class (this is how we do multiple-inheritance in Scala)
     * - Traits represent "does" whereas abstract classes represent "is"
     */
  }

  val dino = new TRex()
  dino.eat(doggie)

  println(s"My doggie's name is ${doggie.name_()}")
}
