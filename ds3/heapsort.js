function heapSort(arr) {
    const len = arr.length;
  
    // Build max heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  
    // Extract elements from the heap
    for (let i = len - 1; i > 0; i--) {
      // Move current root to the end
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function heapify(arr, len, index) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
  
    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];
      heapify(arr, len, largest);
    }
  }
  
  // Example usage
  const array = [6, 5, 3, 1, 8, 7, 2, 4];
  console.log('Before sorting:', array);
  
  const sortedArray = heapSort(array);
  console.log('After sorting:', sortedArray);
  