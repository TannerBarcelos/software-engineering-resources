package lectures.part3fp

object HOFAndCurries extends App {
  // Higher Order Functions (HOFs) are functions that take in other functions
  // From TS background, HOFs in TypeScript would be Array.map(), reduce(), filter(), etc.
  // In FP, HOFs and currying are the most fundamental proponent of making the theory of FP applicable

  def nTimesFn(f: Int => Int, n:Int, x:Int) : Int = {
    if(n <= 0) x
    else nTimesFn(f, n-1, f(x))
  }

  def incrementer = (x:Int) => x + 1

  val value = nTimesFn(incrementer, 10, 0)

  println(value)

  ////

  // Currying

  /**
   * Currying is a technique in functional programming where a function that takes multiple arguments is transformed
   * into a sequence of functions that each take a single argument. The resulting sequence of functions
   * is called a "curried" function.
   *
   * Currying can be useful in several scenarios. For example, it allows us to partially apply a function by fixing
   * some of its arguments, which can be useful in situations where we want to reuse a function w/ different arguments.
   * It also allows us to create specialized versions of a function that are optimized for certain use cases.
   */

  def addNonCurry(x: Int, y: Int): Int = x + y
  def addCurried(x: Int)(y: Int): Int = x + y

  val sum = addCurried(3)(4) // returns 7

  print(sum)

}
