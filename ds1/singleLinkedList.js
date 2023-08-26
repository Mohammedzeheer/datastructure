///<<<<<<<<<<<----  SINGLE LINKED LIST -------->>>>>>>>>>>>

//MAKE CLASS NODE 
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

//-- CLASS FOR LINKED LIST 
class linkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }


     //-- ADD VALUE TO LINKED LIST ------
     add(value){
        const newNode= new Node(value)
        
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
        this.tail.next=newNode
        this.tail=newNode
     }

     addHead(value){
        const newNode=new Node(value)
        if(this.head){
         newNode.next=this.head
         this.head=newNode
        }
     }


      //--- INSERT VALUE BEFORE ANY VALUE  ------
     insertBefore(value, newvalue) {
        const newNode = new Node(newvalue)
        let currentNode = this.head

        if (currentNode.value == value) {
            newNode.next = currentNode
            this.head = newNode
            return

        }
        while (currentNode.next) {
            if (currentNode.next.value == value) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                return
            }
            currentNode = currentNode.next
        }
    }
 

     //INSERT VALUE AFTER USER ENTERED VALUE   ------
    insertAfter(value, newvalue) {
        const newNode = new Node(newvalue)
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value == value) {
                if (!currentNode.next) {
                    currentNode.next=newNode
                    this.tail = currentNode
                    return
                }
                newNode.next = currentNode.next
                currentNode.next = newNode              
                return
            }
            currentNode = currentNode.next
        }
        console.log("not found")
    }

    middle() {
        let mid = this.head
        let temp = this.head
        while (temp && temp.next) {
            mid = mid.next
            temp = temp.next.next
        }
        console.log(mid.value)
    }

reverse() {
    let prev = null;
    let next = null;
    let curr = this.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

    
    total() {
        let currentNode = this.head
        let sum = 0;
        while (currentNode) {
            sum = sum + currentNode.value
            currentNode = currentNode.next
        }
        console.log(sum)
    }


     ///REMOVE VALUE FROM LINKED LIST --------
    remove(value){      
        if(!this.head)return;
    
        if(this.head.value==value){
            this.head=this.head.next
             return
        }
        
        let currentNode=this.head
    
        while(currentNode.next){
            if(currentNode.next.value==value){
                currentNode.next=currentNode.next.next
                if(!currentNode.next){
                   this.tail=currentNode
                }
                return
            }
            currentNode=currentNode.next
        } 
     }
  

    // PRINT LINKED LIST ------------------
    print(){
        let currentNode=this.head
        while(currentNode){
            console.log(currentNode.value);
            currentNode=currentNode.next
        }
    }
}

//array to linked list 
const array=[432,56,443,667,897,776]
function arrayToLinkedList(array){
    for(let i= 0; i< array.length; i++){
       list.add(array[i])
    }
}


const list=new linkedlist()
// arrayToLinkedList(array)
list.add(10)
list.add(20)
list.add(30)
list.remove(30)
list.addHead(5)
// list.insertAfter(10, 34)
// list.insertBefore(30, 34)
// list.total()

list.print()
console.log("----------------------")
list.middle()








