package lectures.part2oop

object Generics extends App {

  // Syntax for generics is someThing[var...]
  // Methods, Traits, Functions, Classes can all be generic
  class MyList[T] {
    // T is a generic type - When a generic type does not have a + or - symbol (Covariance), then it is a Generic Invariant Type
  }

  val list1 = new MyList[Int]
  val list2 = new MyList[String]

  // Let's go ahead and take the code from the Linked List practice file and make it generic below
  class Node[T](var value: T, var next: Node[T])

  abstract class LinkedListBase[T] {
    def head_(): Node[T]

    def tail_(): Node[T]

    def isEmpty(): Boolean

    def add(value: T): Unit
  }

  class LinkedList[T] extends LinkedListBase[T] {

    var head: Node[T] = null
    var tail: Node[T] = null
    var len: Int = 0

    def head_(): Node[T] = {
      if (this.isEmpty()) {
        null
      } else {
        this.head
      }
    }

    def tail_(): Node[T] = {
      if (this.isEmpty()) {
        null
      } else {
        this.tail
      }
    }

    def isEmpty(): Boolean = this.len == 0

    def add(value: T): Unit = {
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
    def printList(node: Node[T]): Unit = {
      if (node != null) {
        if (node.next == null) {
          print(node.value)
        } else {
          print(s"${node.value} -> ")
        }
        printList(node.next)
      }
    }
  }

  // To prove generics work, we know in the exercise file we used Int's so let's use Strings here
  val list = new LinkedList[String]()

  list.add("Tanner")
  list.add("Hayden")
  list.add("Jen")
  list.add("Jorge")
  list.add("Cy")
  list.add("Alex")

  if (list.head_() != null) {
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
