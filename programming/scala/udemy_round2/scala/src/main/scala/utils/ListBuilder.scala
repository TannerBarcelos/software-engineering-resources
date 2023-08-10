package utils

case class ListBuilder[T](size: Int = 10) {

  private val list = new java.util.ArrayList[T]()

  def addItem(item: T): String = {
    if(list.size == size) {
      s"Capacity reached. Evict an element to add ${item}"
    }else {
      list.add(item)
      s"Added ${item} to the list -> ${list}"
    }
  }

  def printList(): Unit = PrintUtil.listPrinter(list)

}
