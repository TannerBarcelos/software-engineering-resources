package playground

import utils.ListBuilder

object Playground {
  def main(args: Array[String]): Unit = {

    val myList = ListBuilder[Int]()

    for(i <- 1 to 10) {
      myList.addItem(i)
    }
    myList.printList()
  }
}
