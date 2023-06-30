package lectures.part2oop

object CaseClasses extends  App {
  case class Message(sender: String, recipient: String, body: String)
  val message1 = Message("guillaume@quebec.ca", "jorge@catalonia.es", "Ça va ?")

  //  Notice how the keyword new was not used to instantiate the Book
  //  case class.This is because
  //  case classes have an apply method by default which takes care of object construction
  //
  //  When you create a case class with parameters , the parameters are public vals which are members of that class and as we know, immutable consts

  // Learn more => https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html#case-classes:~:text=in%20more%20detail.-,Case%20classes,-Case%20classes%20are

  println(message1.sender)  // prints guillaume@quebec.ca
  //  message1.sender = "travis@washington.us"  // this line does not compile because cqse classes promote immutability!

  // toString methods are generated for us when using case classes. This is handy when you want a string representation of the object
  println(message1)
}
