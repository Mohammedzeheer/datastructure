// example of bubble sort 

// function bubblesort(arr){ 
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }

const array=[2,5,1,7,2,8]
console.log(bubbleSort(array))


function bubbleSort(arry){
    for(let i=0;i<arry.length;i++){
        for(let j=0;j<arry.length-1-i;j++){
            if(arry[j]>arry[j+1]){
                let temp=arry[j]
                arry[j]=arry[j+1]
                arry[j+1]=temp
            }
        }    
    }
    return arry
}