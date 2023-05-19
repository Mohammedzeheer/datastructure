// ///mergesort 
//  function mergesort(a,lb,ub){
//     if(lb<ub){
//         let mid=Math.floor((lb+ub)/2)
//         mergesort(a,lb,mid)
//         mergesort(a,mid+1,ub)
//         merge(a,lb,mid,ub)
//     }
//     return a
//  }

//  function merge(a,lb,mid,ub){
//     let i=lb
//     let j=mid+1
//     let k=lb
//     let b=[]

//     while(i<=mid&&j<=ub){
//         if(a[i]<a[j]){
//             b[k]=a[i]
//             i++
//         }
//         else{
//             b[k]=a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//         j++
//         k++
//     }
//       for(let x=lb;x<=ub;x++){
//         a[x]=b[x]
//       }    
//  }

//  const a=[7,4,2,8,9,2,3,5,7,9]
//  console.log(mergesort(a,0,a.length-1))



function mergesort(a,lb,ub){
    if(lb<ub){
        let mid= Math.floor((lb+ub)/2)
        mergesort(a,lb,mid)
        mergesort(a,mid+1,ub)
        merge(a,lb,mid,ub)
    }
    return a
}

 function merge(a,lb,mid,ub){
     let i=lb
     let j=mid+1
     let k=lb
     let b=[]

     while(i<=mid&&j<=ub){
        if(a[i]<a[j]){
            b[k]=a[i]
            i++;
        }
        else{
            b[k]=a[j]
            j++
        }
        k++
     }

     while(i<=mid){
        b[k]=a[i]
        i++
        k++
     }
     while(j<=ub){
        b[k]=a[j]
        j++
        k++
     }
     for(let c=lb;c<=ub;c++){
        a[c]=b[c]
     } 
 }

 const a=[54,5,1,67,32,98,12,34]
 console.log(mergesort(a,0,a.length-1))