class maxheap{
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

let heap=new maxheap()
// let array=[12,32,43,5,1,8]
// heap.heapbuild(array)
heap.insert(34)
heap.insert(32)
heap.insert(78)
heap.insert(89)
console.log(heap);