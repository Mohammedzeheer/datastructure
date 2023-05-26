class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function arrayToLinkedList(arr) {
    if (arr.length === 0) {
      return null;
    }
    
    let head = new Node(arr[0]);
    let currentNode = head;
  
    for (let i = 1; i < arr.length; i++) {
      const newNode = new Node(arr[i]);
      currentNode.next = newNode;
      currentNode = newNode;
    }
  
    return head;
  }
  
  // Example usage
  const array = [1, 2, 3, 4, 5];
  const linkedList = arrayToLinkedList(array);
  console.log(linkedList); // Output: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: null } } } } }
  