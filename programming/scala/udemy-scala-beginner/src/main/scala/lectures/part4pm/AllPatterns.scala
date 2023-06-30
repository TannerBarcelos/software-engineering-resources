package lectures.part4pm

object AllPatterns extends App {

  // Pattern Matching constants / literals
  val x:Any = "Scala"
  val constants = x match {
    case 1 => "A number"
    case "Scala" => "THE Scala"
    case true => "The truth"
    case AllPatterns => "A singleton obj"
  }

  // Wildcard pattern matching
  val matchAll = x match {
    case _ => "Match all"
  }

  // Variable matching
  val matchVar = x match {
    case something => s"I have found $something"
  }

  println(matchVar)

  // List patterns - Very useful / powerful
  val myList = List(1, 2, 3, 4, 5)
  val standardListMatching = myList match {
    case List(1, _, _, _, _) => // extractor
    case List(1, _*) => // arbitrary length matcher (*) starting from first element
    case 1 :: List(_) => // infix pattern
    case List(1, 2, 3) :+ 42 => // infix pattern
  }
  println(standardListMatching)

  // see all patterns on the docs / video 36-39 in Scala course
}
