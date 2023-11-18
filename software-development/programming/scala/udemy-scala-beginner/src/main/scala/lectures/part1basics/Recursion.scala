package lectures.part1basics

import scala.annotation.tailrec

object Recursion extends App{
  // Note no use of {} for function block. These are optional but must follow indentation. It is just like Python
  def factorial(n: Int) : Int =
    if (n <= 1) then 1
    else {
      var res = n * factorial(n - 1) // using var for practice - should always try to use val
      res
    }

  val res = factorial(5)
  println(res)

  // Tail Recursion - Preserves call stack by saving the recursive calls til the end of the functions execution
  @tailrec
  def concatenateTailRec(str: String, n: Int, acc: String) : String = {
    if(n <= 0) then acc
    else {
      val concat = acc + " " + str
      concatenateTailRec(str, n - 1, concat)
    }
  }

  println(concatenateTailRec("word", 5, ""))
}
