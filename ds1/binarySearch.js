 // Binary Search
 function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index of the target element if found
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half of the array
      } else {
        right = mid - 1; // Search in the left half of the array
      }
    }
  
    return -1; // Return -1 if the target element is not found
  }

  // Example usage:
  const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const target = 23;

  console.log("Binary Search:", binarySearch(arr, target));


  //// My code -------------------------------------------------------

  const arra=[2,4,6,7,8,9]
let start=0
let end=arra.length-1
const find= 7

while(start<=end){
 let mid= Math.floor(start+(end-start)/2)
  if(arra[mid]==find)
  {
    // return mid
    console.log(mid)
  }
  if (arra[mid]<find)
  {
      start=mid+1
   
  }else{
      end=mid-1
  }
} 




///binary search in recursion -----------------------------------
function binarySearchRecursive(arr, find, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor(start + (end - start) / 2);

  if (arr[mid] === find) {
    return mid;
  } else if (arr[mid] < find) {
    return binarySearchRecursive(arr, find, mid + 1, end);
  } else {
    return binarySearchRecursive(arr, find, start, mid - 1);
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const elementToFind = 6;

const resultIndex = binarySearchRecursive(array, elementToFind, 0, array.length - 1);
console.log(resultIndex);


function binarysearch(array,target,start,end){
   if(start>end){
    return -1
   }
 let mid=Math.floor(start+(end-start)/2)
   if (array[mid]==target){
     return mid;
   }
   if(array[mid]<target){
    return binarysearch(array,target,mid+1,end)
   }
   else{
    return binarysearch(array,target,start,mid-1)
   }
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarysearch(array1,5,0,array1.length))