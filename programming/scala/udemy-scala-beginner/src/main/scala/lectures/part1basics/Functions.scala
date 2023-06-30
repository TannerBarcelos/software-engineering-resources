package lectures.part1basics

object Functions extends App {
  def aFunction(a: String, b:Int) = { // Return type can be omitted as it will be inferred by the compiler
    val name = a
    val age = b
    "Hello, my name is " + name + " and I am " + age + " years old" // return statements are not needed in Scala!
    /*
    * Like expressions / code blocks in Scala, the last line of code that is executed is the value that is returned
    from the expression. In the above example, the last line is a string being returned implicitely
    * */
  }

  // When you need loops, use recursion. Do not write hard-coded loops. That would be imperative and not functional
  def printNameRecursive(name: String, n: Int = 3): String = { // Need return type for recursive functions! This is the 1 rule of return types
    if(n == 1) then name
    else name + " " + printNameRecursive(name, n - 1)
  }

  val myName = aFunction("Tanner", 27)
  println(myName)
  println(printNameRecursive("Tanner", 5))

  // Unit example with inline function expression (you can do functions in 1 line like TS if possible)
  def myUnit(a: String) : Unit = println(a)
  myUnit("Bob the builder")


  // Factorial Function Example
  // This further demonstrates how to write functions / recursive functions in Scala
  def factorial(n: Int): Int = {
    if(n <= 0) then 1 // base case - ends recursion if n == 0 as multiplying by 0 turns everything to 0 so we want to stop at 0 and return 1
    else n * factorial(n - 1)
  }

  val f = factorial(5)
  println("The factorial of N = 5 is " + f)

  // Fibonacci - Slow way but showing more recursion examples
  def fib(n:Int): Int = {
    if(n <= 2) then 1
    else fib(n - 1) + fib(n - 2)
  }
  println(fib(7))


  // Anonymous functions (arrows)
  val addTen = (x: Int) => x + 10
  println(addTen(20))
}
