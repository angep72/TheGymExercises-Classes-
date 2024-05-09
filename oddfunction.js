function odd (A){
    const newObj = {};
    const newArray = [];
    for (a in A){
        const chi = A[a]
        if (!newObj[chi]){
            newObj[chi]=0;
        }
        newObj[chi]++
    }
   for (key in newObj){
       if(newObj[key] % 2 != 0 ){
           newArray.push(parseInt(key))
       }
   }
   return (newArray[0])
   
    
    
}
console.log(odd([23,45,6,7,8,6,5,6,5,6]))