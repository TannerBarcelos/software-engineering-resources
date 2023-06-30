package lectures.part3fp

object AnonFuncs extends App{

  // Lambda Function (anonymous, unnamed function) - Also called arrows in other languages like TypeScript
  val inferredDoubled = (x: Int) => x * 2

  // Typing the return type of a Lambda - says "This lambda takes in an int and returns an int"
  val typedDouble: Int => Int = (x) => x * 2

  // Shorthand expression using explicit types - Using _ in place of the order in which you type the lambda parameters will tell the compiler
  // that this _ is an int and we can take whatever that int is when called and multiply _ * 2.
  // This is seen a lot in more advanced codebases so I wanted to call this out... I don't care for it because it makes
  // the code harder to read
  val inferredShorthand: Int => Int = _ * 2

  println(inferredDoubled(10))
  println(typedDouble(5))
  println(inferredShorthand(4))

  /**
   * I need to call out something quite important
   *
   * Notice how inferredDouble uses the assignment operator but the typedDouble lambda uses the : operator
   *
   * When using type inference, we can assign the lambda expression to a variable using = because the return type of
   * that lambda will also let the variable assigned know that it will be of the type inferred
   *
   * However
   *
   * If using explicit typing of a lambda, we need to use the : operator as it is necessary to allow typing the params
   * of a lambda and the return type... If we used the assignment (=) operator, the Scala compiler would think we are
   * trying to re-assign the variable in-line.
   *
   * I prefer to use type inference when possible, so using assignment will be how I lean for a lot of the future code,
   * but codebases I might or anyone reading this might work in might use different conventions
   */
}
