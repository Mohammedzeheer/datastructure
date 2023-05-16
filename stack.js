class Stack {
    constructor() {
      this.stack = [];
      this.array=[];
      this.str1=[]
      this.str2=[]
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    push(item) {
      this.stack.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack[this.stack.length - 1];
    }

    display(){
            console.log(this.stack)
    }

    undo(){
       this.array.push(this.stack.pop())
      }

      redo(){
        this.stack.push(this.array.pop())
      }

       addString(data){
        this.str1.push(data)
       }

       printString(){
        console.log(this.str1); 
       }

       reverseString(){
         while(this.str1.length>0){
          this.str2.push(this.str1.pop())
         }
         let str=this.str2.join('')
         console.log(str);
       }
       

 }
  // Example usage
  const stackl = new Stack();
  
  stackl.push(10);
  stackl.push(20);
  stackl.push(30);
  stackl.display();
//   console.log(stackl.peek());  // Output: 30
  
  console.log(stackl.pop());
  stackl.display();   // Output: 30
  stackl.undo()
  stackl.display();
  stackl.redo()
  stackl.display();
//   console.log(stackl.pop());   // Output: 20
//   console.log(stackl.pop());   // Output: 10
//   console.log(stackl.pop());   // Output: Stack is empty

stackl.addString("m")
stackl.addString("o")
stackl.addString("h")
stackl.printString()
stackl.reverseString()

//-----------------------------STACK IN ARRAY--------------------------------------------------------

// class stack {
//     constructor(){
//     this.array=[]
//     this.array2=[]
//     }
//     push(data){
//       this.array.push(data)
//     }
//     pop(){
//       if(this.array.length !=0)
//      this.array.pop()
//      else
//      console.log('stack underflow');
    
//     }
//     undo(){
//       this.array2.push(this.array.pop())
//     }
//     redo(){
//       if(this.array2.length<0)
//       this.array.push(this.array2.pop())
//       else
//       console.log('stack underflow');
//     }
  
//     secondlarge(){
//       let big=-Infinity
//       let second=-Infinity
//       for(let i=0;i<this.array.length;i++){
//         if(this.array[i]>big){
//           second=big
//           big=this.array[i]
//         }
//         else if(second<this.array[i] && second<big){
//           second=this.array[i]
//         }
//       }
//       console.log('second large is ',second);
//     }
  
//     display(){
//       console.log(this.array);
//     }
//   }
//   let newstack=new stack()
//   newstack.push(10)
//   newstack.push(20)
//   newstack.push(30)
//   newstack.push(40)
//   // newstack.pop()
//   // newstack.redo()
//   newstack.secondlarge()
//   newstack.display()
  
  
  //----------------------------------    STACK IN LINKED LIST    ---------------------------------------
  
  
  // class node{
  //   constructor(data){
  //     this.data=data
  //     this.next=null
  //   }
  // }
  // class stack{
  //   constructor(){
  //     this.top=null
  //     this.size=0
  //   }
  //   push(data){
  //     let newnode=new node(data)
  //     if(this.top==null)
  //     this.top=newnode
  //     else{
  //       newnode.next=this.top
  //       this.top=newnode
  //     }
  //     this.size++
  //   }
  //   pop(){
  //     if(this.top){
  //       this.top=this.top.next
  //     }
  //   }
  //   removemid(){
  //     let mid=Math.floor(this.size/2)
  //     let i=0;
  //     let temp=this.top;
  //     while (temp) {
  //       i++
  //       if(i==mid){
  //         var remove=temp.next.data
  //         temp.next=temp.next.next
  //       }
  //       temp=temp.next
  //     }
  //    console.log('removemid=',remove);
  //   }
  //   secondlarge(){
  //    let big=-Infinity
  //    let second=-Infinity
  //    let temp=this.top
    
  //   while (temp) {
  //     if(temp.data>big)
  //     big=temp.data
  //     else if(temp.data>second )
  //     second=temp.data
      
  //     temp=temp.next
  //   }
     
  
  //    console.log('big=',big);
  //    console.log('second big=',second);
  //   }
  //   display(){
  //     let temp=this.top
  //     while(temp){
  //       console.log(temp.data)
  //       temp=temp.next;
  //     }
  //   }
  // }
  
  // let newstack=new stack()
  // newstack.push(10)
  // newstack.push(20)
  // newstack.push(30)
  // newstack.push(40)
  // newstack.push(50)
  // newstack.display()
  // newstack.pop()