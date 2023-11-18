package utils

object PrintUtil {

  private def printer[T](printable: T): Unit = {
    println(printable)
  }

  def listPrinter[T](list: java.util.ArrayList[T]): Unit = {
    list.forEach(printer)
  }
}
