package lectures.part3fp

object WhatsAFunctions extends App{
  // We tend to use arrow functions / anonymous functions a lot in Scala. It is similar to JS however it is important
  // to understand that functions are objects under the hood. This means they are derived from 'some thing' and allow
  // extra behaviors. We can see this when making a new string. See below

  val myString : String = "My String"

  println(myString.length)

  // With myString, we can call methods on it directly! In OOP, we know we can call methods on objects instantiated
  // from a class - but how the heck is this possible in Scala? Well, that is because functions, primitive data types
  // etc. are objects that are instance of a class.
  // IN MYSTRING'S CASE, myString IS AN INSTANCE OF THE STRING CLASS, AND THUS GIVES US ALL THE STRING METHODS

  def concatStrings(str1:String, str2:String) : String = {
    return s"$str1$str2"
  }

  concatStrings("tanner", "barcelos")
}
