function numberToPower(number, power){
    let result = 1;
    
    for (let i = 0; i < power; i++) {
      result = result * number; 
    }
    
    return result
  }
  //
  function getLargerNumbers(a, b) {
    let newArr =[];
      for (i in a){
        if (a[i]>=b[i]){
          newArr.push(a[i])
        }else{
          newArr.push(b[i])
        }
      }
      
      return (newArr)
    }