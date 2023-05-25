// class Heap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(arr) {
//       this.heap = arr;
//       for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
//         this.heapify(i);
//       }
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       let currentIndex = this.heap.length - 1;
//       let parentIndex = Math.floor((currentIndex - 1) / 2);
  
//       while (
//         currentIndex > 0 &&
//         this.heap[currentIndex] < this.heap[parentIndex]
//       ) {
//         this.swap(currentIndex, parentIndex);
//         currentIndex = parentIndex;
//         parentIndex = Math.floor((currentIndex - 1) / 2);
//       }
//     }
  
//     remove() {
//       if (this.heap.length === 0) {
//         return null;
//       }
  
//       if (this.heap.length === 1) {
//         return this.heap.pop();
//       }
  
//       const removedValue = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapify(0);
  
//       return removedValue;
//     }
  
//     heapify(index) {
//       const leftChildIndex = 2 * index + 1;
//       const rightChildIndex = 2 * index + 2;
//       let smallestIndex = index;
  
//       if (
//         leftChildIndex < this.heap.length &&
//         this.heap[leftChildIndex] < this.heap[smallestIndex]
//       ) {
//         smallestIndex = leftChildIndex;
//       }
  
//       if (
//         rightChildIndex < this.heap.length &&
//         this.heap[rightChildIndex] < this.heap[smallestIndex]
//       ) {
//         smallestIndex = rightChildIndex;
//       }
  
//       if (smallestIndex !== index) {
//         this.swap(index, smallestIndex);
//         this.heapify(smallestIndex);
//       }
//     }
  
//     swap(i, j) {
//       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
//   }
  
//   // Example usage
//   const minHeap = new Heap();
//   minHeap.buildHeap([9, 5, 7, 1, 3]);
//   console.log('Min Heap:', minHeap.heap); // [1, 3, 7, 9, 5]
  
//   const maxHeap = new Heap();
//   maxHeap.buildHeap([2, 8, 4, 1, 6]);
//   console.log('Max Heap:', maxHeap.heap); // [8, 6, 4, 1, 2]
  
//   minHeap.insert(2);
//   console.log('Min Heap after insertion:', minHeap.heap); // [1, 2, 7, 9, 5, 3]
  
//   maxHeap.insert(10);
//   console.log('Max Heap after insertion:', maxHeap.heap); // [10, 8, 4, 1, 2, 6]
  
//   const minHeapValue = minHeap.remove();
//   console.log('Min Heap value removed:', minHeapValue); // 1
//   console.log('Min Heap after removal:', minHeap.heap); // [2, 3, 7, 9, 5]
  
//   const maxHeapValue = maxHeap.remove();
//   console.log('Max Heap value removed:', maxHeapValue); // 10
//   console.log('Max Heap after removal:',)


// JavaScript implementation of a max heap using an array
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Build a max heap
  buildHeap(array) {
    this.heap = array;
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // Insert an element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove the maximum element from the heap
   // Remove the maximum element from the heap
   remove() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return maxValue;
  }

  // Heapify up (used after insertion)
  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] < this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      }
      index = parentIndex;
    }
  }

  // Heapify down (used after removal)
  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;
    const heapSize = this.heap.length;

    if (leftChildIndex < heapSize && this.heap[leftChildIndex] > this.heap[largestIndex]) {
      largestIndex = leftChildIndex;
    }

    if (rightChildIndex < heapSize && this.heap[rightChildIndex] > this.heap[largestIndex]) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
      this.heapifyDown(largestIndex);
    }
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

// Usage:
const maxHeap = new MaxHeap();
maxHeap.buildHeap([10, 5, 15, 20]);
console.log("Max Heap after build:", maxHeap.heap);
maxHeap.insert(25);
console.log("Max Heap after insertion:", maxHeap.heap);
const maxElement = maxHeap.remove();
console.log("Max Heap after removal of", maxElement + ":", maxHeap.heap);
