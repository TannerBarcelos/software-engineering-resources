package utils

import java.util

object PrintUtil {

  private def printer[T](printable: T): Unit = {
    println(printable)
  }

  def listPrinter[T](list: util.ArrayList[T]): Unit = {
    list.forEach(printer)
  }
}
