// function partition (array, start, end) {
//   const pivotValue = array[start]; // first element as pivot
//   const i = start;
//   let j = start + 1;
// for(let i = start + 1; i < end; i++) {
//     if (array[i] < pivotValue) {
//       [array[j], array[i]] = [array[i], array[j]];
//       j++;
//     }
//   }
//   [array[i], array[j - 1]] = [array[j - 1], array[i]];
//   return j - 1;
// }

// function quickSort(array, start, end) {
//   if (start >= end) {
//     return array;
//   }
//   // get pivot/partition index
//   i = partition(array, start, end);
//   quickSort(array, start, i); // left array
//   quickSort(array, i + 1, end); // right array
//   return array;
// }

//quick sort
function partition (array, start, end) {
    const pivotValue = array[start]; // first element as pivot
    const pivotIndex = start;
    let storeIndex = start + 1;
  for(let i = start + 1; i < end; i++) {
      if (array[i] < pivotValue) {
        [array[storeIndex], array[i]] = [array[i], array[storeIndex]];
        storeIndex++;
      }
    }
    [array[pivotIndex], array[storeIndex - 1]] = [array[storeIndex - 1], array[pivotIndex]];
    return storeIndex - 1;
  }
  function quickSort(array, start, end) {
    if (start >= end) { 
      return array;
    }
    // get pivot/partition index
    pivotIndex = partition(array, start, end);
    quickSort(array, start, pivotIndex); // left array
    quickSort(array, pivotIndex + 1, end); // right array
    return array;
  }





// function partition (array, start, end){
//     let pivotvalue= array[start]
//     let pivotindex=start
//     let storeindex=start+1

//     for(let i=start+1;i<end;i++){
//       if(array[i]<pivotvalue){
//         [array[i],array[storeindex]]= [array[storeindex],array[i]]
//         storeindex++
//       }
//     }


// }
  
// function partition(a, l, r) {
//   let pivot = a[l];
//   let i = l + 1;
//   let j = r;

//    while (i <= j) {
//     while (a[i] < pivot) {
//       i++;
//     }
//     while (a[j] > pivot) {
//       j--;
//     }

//     if (i <= j) {
//       let temp = a[i];
//       a[i] = a[j];
//       a[j] = temp;
//       i++;
//       j--;
//     }
//   }

//   let temp = a[l];
//   a[l] = a[j];
//   a[j] = temp;

//   return j;
// }

// function quicksort(a, l, r) {
//   if (l < r) {
//     let p = partition(a, l, r);
//     quicksort(a, l, p - 1);
//     quicksort(a, p + 1, r);
//   }
//   return a;
// }

// const array = [5, 2, 7, 4, 9, 3, 6, 12];
// let l = 0;
// let r = array.length - 1;

// const sortedArray = quicksort(array, l, r);
// console.log(sortedArray);





// function partition (list, start, end) {
//     const pivotValue = list[start]; // first element as pivot
//     const pivotIndex = start;
//     let storeIndex = start + 1;
//   for(let i = start + 1; i < end; i++) {
//       if (list[i] < pivotValue) {
//         [list[storeIndex], list[i]] = [list[i], list[storeIndex]];
//         storeIndex++;
//       }
//     }
//     [list[pivotIndex], list[storeIndex - 1]] = [list[storeIndex - 1], list[pivotIndex]];
//     return storeIndex - 1;
//   }
//   function quickSort(list, start, end) {
//     if (start >= end) { 
//       return list;
//     }
//     // get pivot/partition index
//     pivotIndex = partition(list, start, end);
//     quickSort(list, start, pivotIndex); // left list
//     quickSort(list, pivotIndex + 1, end); // right list
//     return list;
//   }

