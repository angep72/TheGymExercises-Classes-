function digitalRoot(n) {
    let count = String(n).split('').reduce((count,digit)=>count+1,0);
      if (count > 1){
          let result = String(n).split('').map(Number).reduce((acc,curr)=>acc+curr,0);
          return digitalRoot(result);
      }    else{
          return n;
      }
  }