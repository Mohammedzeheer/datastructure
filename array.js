//// Reverse array ------------------------------------------------

const array = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray); 


//reverse array another method ---------------------------------------------------

function reversearray(arr) {
  for (i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

const arr = [1, 2, 3, 4, 5, 6]
console.log(reversearray(arr))



//// unique array ------------------------------------------------
const array1 = [1, 2, 1, 5, 5, 6];

for (let i = 0; i < array1.length; i++) {
  let temp = 0
  for (let j = 0; j < array1.length; j++) {
    if (array1[i] == array1[j] && i != j) {
      temp = 1
      break;
    }
  }
  if (temp == 0) {
    console.log(array1[i])
    break;
  }
}


/////// find middle array ----------------------------------------------
function findMiddleElement(array) {
  if (array.length === 0) {
    return null; //
  }

  var middleIndex = Math.floor(array.length / 2); // Calculate the middle index
  return array[middleIndex]; // Return the middle element
}

// Example usage:
var myArray = [1, 2, 3, 4, 5, 6];
var middleElement = findMiddleElement(myArray);
console.log(middleElement); // Output: 3



//// add one to last and make array tecnique array ------------------------------------------------

let arr2=[1,9,9,9]
function addone(arr2){
for(let i=arr2.length-1;i>=0;i--){
 if(arr2[i]<9){
    arr2[i]++
    return arr2
   }
   arr2[i]=0
 }
// arr2 = new int[arr2.length + 1];
// arr2[0] = 1;
return arr2
}

console.log(addone(arr2))
 
//// find the power array --------------------------------------------
let arra = [1,2,3,2,5,2,5,2,7,2,5,2];
let p = 0;
let array2 =[]
for (let i = 0; i < arra.length; i++) {
  if (arra[i] == 2) {
    let result = 1;
    for (let j = 0; j < p; j++) {
      result = result * arra[i];
    }
    array2[p] = result;
   p++;
  }
  
}
console.log(array2)