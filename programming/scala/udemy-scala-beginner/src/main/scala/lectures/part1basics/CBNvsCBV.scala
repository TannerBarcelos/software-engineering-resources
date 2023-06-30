package lectures.part1basics

object CBNvsCBV extends App{
  def calledByValue(x: Long) : Unit = { // will evaluate value of x before function is called and x will retain the same value for the functions lifetime
    println("By Value: " + x)
    println("By Value: " + x)
  }

  /**
   * Call by name is a parameter-passing mechanism used in programming languages where the actual parameter expression
   * is not evaluated before it is passed to the function. Instead, the expression is evaluated inside the function
   * every time the parameter is used.
   *
   * Call by value is used a lot more however call by name is great for doing lazy evaluations and stuff like
   * time checking etc.
   */
  def calledByName(x: => Long): Unit = { // will evaluate the value of x as it is executed after the function is called. So, using => (vall by name) the arguments of a function will have a delayed / lazy evaluation until they are called. The value also can change (call by name is heavily used for such cases)
    println("By Name: " + x)
    println("By Name: " + x)
  }

  calledByValue(System.nanoTime())
  calledByName(System.nanoTime())
}
