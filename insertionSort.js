
let a = [4, 7, 3, 1, 9, 5, 6]
function insertionsort() {
    for (i = 1; i < a.length; i++) {
        temp = a[i]
        j = i - 1
        while (j >= 0 && a[j] > temp) {
            a[j + 1] = a[j]
            j--
        }
        a[j + 1] = temp
    }
    return a
}

let result=insertionsort()
console.log(result)








// //insertion sort explanation ---

// function insertionSort2(arr) {

// 	//we don't need to start at index 0, since by itself, it is already sorted.
// 	for (let i = 1; i < arr.length; i++)
// 	{
// 		//This is the element we are inserting to the correct location
// 		let key = arr[i];

// 		//Start checking against all elements on the left, until the beginning of array
// 		//Or until it found an element that is smaller than the key.
// 		let j = i - 1;
// 		while (j >= 0 && arr[j] > key) 
// 		{
// 			//Move the element one step to the right
// 			arr[j + 1] = arr[j];
// 			j = j - 1
// 		}

// 		//insert the key into the correct location
// 		arr[j + 1] = key;
// 	}

// 	return arr;
// } 



// ///example 1 insertion sort ---------------------------------------


// function insertionSort(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		let key = arr[i];

// 		let j = i - 1;
// 		while (j >= 0 && arr[j] > key) {
// 			arr[j + 1] = arr[j];
// 			j = j - 1
// 		}

// 		arr[j + 1] = key;
// 	}

// 	return arr;
// }

// // example 2 insertion sort ------------------------------------------

// const insertionSort = (array) => {
//     for (let i = 1; i < array.length; i++) {
//       let currentElement = array[i];
//       let lastIndex = i - 1;
  
//       while (lastIndex >= 0 && array[lastIndex] > currentElement) {
//         array[lastIndex + 1] = array[lastIndex];
//         lastIndex--;
//       }
//       array[lastIndex + 1] = currentElement;
//     }
  
//     return array;
//   };



