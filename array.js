//// Reverse array ------------------------------------------------

const array = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray); 


//// unique array ------------------------------------------------
const array1 = [1, 2, 1, 5, 5,6];

for(let i=0;i<array1.length;i++){
 let temp=0
  for(let j=0;j<array1.length;j++){
    if(array1[i]==array1[j]&&i!=j){
      temp=1
      break;
    }
  }
  if(temp==0){
    console.log(array1[i])
    break;  
  }
}


//// tecnique array ------------------------------------------------

const arr2=[1,2,3,9]
const t=3
const add=1
for(let i=0;i<array1.length;i++){
 if(arr2[i]==t){
  arr2[i]=arr2[i]+add
   if(arr2[i]>=10){

   }
 }

}
