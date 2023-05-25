// class minheap{
//     constructor(){
//         this.heap=[]
//     }

//     parents(i){
//         return Math.floor((i-1)/2)
//     }

//     leftchild(i){
//        return 2*i+1
//     }

//     rightchild(i){
//         return 2*i+2
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapup(this.heap.length-1)
//     }
//     heapup(i){
//         let parent=this.parents(i)
//         while(i>0&&this.heap[parent]>this.heap[i]){
//             this.swap(i,j)
//             i=parent
//             parent=this.parents(i)
//         }
//     }
//     size(){
//         return this.heap.length-1
//     }
//     remove(){
//         this.swap(0,this.size)
//         this.heap.pop()
//         this.shiftdown(0)
//     }


//     shiftDown(i){
//         let size=this.heap.length-1
//         let left=this.leftChild(i)
//         let right=this.rightChild(i)
//         let smallest ;
//         while(left<=size){                
//             if(right<=size && this.heap[right]<this.heap[left]){
//                 smallest=right
//             }else{
//                 smallest=left
//             }
//             if(this.heap[i]>this.heap[smallest]){
//                 this.swap(i,smallest)
//                 i=smallest
//                 left=this.leftChild(i)
//             }else{
//                 return
//             }
//         }
//     }


// }

// let heap=new minheap()
// heap.insert(34)
// heap.insert(45)
// console.log(heap);



class minheap{
    constructor(){
        this.heap=[]
    }

    parents(i){
      return Math.floor((i-1)/2)
    }

    leftchild(i){
        return 2*i+1
    }

    rightchild(i){
        return 2*i+2
    }

    size(){
        return this.heap.length-1
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

     insert(value){
        this.heap.push(value)
        this.heapup(this.size())
     }

     heapup(i){
        let parent=this.parents(this.size())
        while(i>=0&&this.heap[i]>this.heap[parent]){
            this.swap(i,parent)
            i=parent
            parent=this.parents(i)
        }
     }

     delete(){
        this.swap(0,this.size())
        this.heap.pop()
        this.shiftdown(0)
    }

    heapbuild(array){
        this.heap=[...array]
        for(let i=this.parents(this.size());i>0;i--){
           this.shiftdown(i)
        }
    }

    shiftdown(i){
       let size=this.size()
        let left=this.leftchild(i)
        let right=this.rightchild(i)
        let smallest
        while(left<=size){
            if(right<=size&&this.heap[right]<this.heap[left]){
                smallest=right
            }else{
                smallest=left
            }if(this.heap[i]>this.heap[smallest]){
                this.swap(i,smallest)
                i=smallest
                left=this.leftchild(i)
            }else{
                return 
            }
        }
    }

}

let heap=new minheap()
// let array=[12,32,43,5,1,8]
// heap.heapbuild(array)
heap.insert(34)
heap.insert(32)
heap.insert(78)
heap.insert(89)
console.log(heap);