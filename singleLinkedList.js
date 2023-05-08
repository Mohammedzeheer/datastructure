///<<<<<<<<<<<----  SINGLE LINKED LIST -------->>>>>>>>>>>>

//MAKE CLASS NODE 
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

//CLASS FOR LINKED LIST 
class linkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }


      //-- ADD VALUE TO LINKED LIST----
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

        /// INSERT VALUE BEFORE ANY VALUE ------
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
 
     //INSERT VALUE AFTER USER ENTERED VALUE------
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



       ///REMOVE VALUE FROM LINKED LIST 
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
  
     //PRINT LINKED LIST --------
    print(){
        let currentNode=this.head
        while(currentNode){
            console.log(currentNode.value);
            currentNode=currentNode.next
        }
    }
}

const list=new linkedlist()

list.add(10)
list.add(20)
list.add(30)
list.remove(20)
list.insertAfter(10, 34)
list.insertBefore(30, 34)
list.print()








