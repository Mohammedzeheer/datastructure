//selection sort 

let a=[6,1,8,7,9,2]
let i;
 function selectionSort(){
    for (i=0;i<a.length-1;i++){
        let min=i
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[min]){
                min=j
            }          
        }
        if(min!=i){
            [a[i] ,a[min]] =[a[min],a[i]]
          }
    }
    return a
 }

 console.log(selectionSort());




// function selectionSort(unsortedList) {
//     const list = [...unsortedList];
//        for (let i = 0; i < list.length - 1; i += 1 ) {
//            // find minimum element in rest of the array
//            let minIndex = i;
//            for (let j = i + 1; j < list.length; j += 1) {
//                if (list[j] < list[minIndex]) {
//                    minIndex = j;
//                }
//            }
//            // swap if with the minimum element, if any
//            if (minIndex !== i) {
//                [list[i], list[minIndex]] = [list[minIndex], list[i]];
//            }
//        }
//        return list;
//    }