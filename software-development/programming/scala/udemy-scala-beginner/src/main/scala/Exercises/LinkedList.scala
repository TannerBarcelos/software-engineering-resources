package Exercises
object LL extends App {

  class Node(var value: Int, var next: Node)

  abstract class LinkedListBase {
    /**
     * Required class members for a Linked List implementation
     *
     * isEmpty() -  Checks if the list is empty or not
     * add(int) -   Adds a value to the linked list
     * head() -     The head element of the linked list
     * tail() -     The tail element of the linked list
     */
    def head_(): Node

    def tail_(): Node

    def isEmpty(): Boolean

    def add(value: Int): Unit
  }

  class LinkedList extends LinkedListBase {

    var head: Node = null
    var tail: Node = null
    var len: Int = 0

    def head_(): Node = {
      if (this.isEmpty()) {
        null
      } else {
        this.head
      }
    }

    def tail_(): Node = {
      if (this.isEmpty()) {
        null
      } else {
        this.tail
      }
    }

    def isEmpty(): Boolean = this.len == 0

    def add(value: Int): Unit = {
      val node = new Node(value, null)
      if (this.isEmpty()) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node // doing this makes adding and printing tail both constant time. By tracking the tail, we can always add to the end in O(1) instead of iterating to the tail then doing this logic
        this.tail = node
      }
      this.len += 1
    }

    def printList(node: Node) : Unit = {
      if(node != null) {
        if(node.next == null) {
          print(node.value)
        }else {
          print(s"${node.value} -> ")
        }
        printList(node.next)
      }
    }
  }

  val list = new LinkedList()

  list.add(10)
  list.add(102)
  list.add(44)
  list.add(98)
  list.add(2)
  list.add(7)

  if(list.head_() != null) {
    val headVal = list.head_().value
    println(s"Head value: $headVal")
  }

  if (list.tail_() != null) {
    val tailVal = list.tail_().value
    println(s"Tail value: $tailVal")
  }

  println(s"Length of linked list: ${list.len}")

  list.printList(list.head_())
}