///--------------------------------------------double linked list--------------------------

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    delete(value) {
        let currentNode = this.head
        if (!currentNode) {

            return
        }

        while (currentNode) {
            if (currentNode.value == value) {
                if (currentNode == this.head && currentNode == this.tail) {
                    this.tail = null
                    this.head = null
                }
                else if (currentNode == this.head) {
                    this.head = currentNode.next
                    this.head.prev = null

                }
                else if (currentNode == this.tail) {
                    this.tail = this.tail.prev
                    this.tail.next = null
                }
                else {
                    currentNode.prev.next = currentNode.next
                    currentNode.next.prev = currentNode.prev
                }
                return
            }
            currentNode = currentNode.next
        }
    }

    insertAfter(value, newvalue) {
        const newNode = new Node(newvalue)

        let currentNode = this.head

        if (currentNode.value == value) {
            currentNode.next.prev = newNode
            newNode.next = currentNode.next
            newNode.prev = currentNode
            currentNode.next = newNode
            return
        }
        if (this.tail.value == value) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            return
        }

        while (currentNode) {
            if (currentNode.value == value) {
                currentNode.next.prev = newNode
                newNode.next = currentNode.next
                currentNode.next = newNode
                newNode.prev = currentNode

                if (currentNode.next == null) {
                    this.tail = currentNode
                }
                return
            }
            currentNode = currentNode.next
        }
    }

    insertBefore(value, newvalue) {
        const newNode = new Node(newvalue)

        let currentNode = this.head

        if (!currentNode) {
            return
        }

        if (currentNode.value == value) {
            newNode.next = currentNode
            currentNode.prev = newNode
            this.head = newNode
            this.head.prev = null
            return
        }
        while (currentNode) {
            if (currentNode.value == value) {
                newNode.next = currentNode
                newNode.prev = currentNode.prev
                currentNode.prev.next = newNode
                newNode.next = currentNode
                return
            }
            currentNode = currentNode.next
        }


    }


    print() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
    }
    printReverese() {
        let currentNode = this.tail
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.prev
        }
    }
}

const myDList = new DoubleLinkedList

myDList.add(10)
myDList.add(20)
myDList.add(30)
myDList.add(40)
myDList.add(50)

myDList.print()
console.log("-------- -----------");
// myDList.printReverese()
// myDList.delete(10)
// myDList.print()
console.log("--------------------");
// myDList.insertAfter(10,35)
// myDList.print()
console.log("--------------------");
myDList.insertBefore(10, 25)
myDList.print()




