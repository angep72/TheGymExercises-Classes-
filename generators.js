function* generators(a) {
    let b =1 ;
     while(true){
       yield `${a} x ${b} = ${a*b}`
       b++
     }
     
   }
   let result = generators(3);
   console.log(result.next());
   console.log(result.next())