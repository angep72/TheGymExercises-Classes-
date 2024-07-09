function smaller(nums) {
    let result= new Array(nums.length).fill(0)
       for (let i = nums.length - 1; i >= 0; i--) {
            for(j=i+1;j<nums.length;j++){
                if(nums[j]<nums[i]){
                    result[i]++
                  
                }
            }
          }
          return result; 
        
      }
      //Coffee
      function coffee(str) {
  const Reg = new RegExp("coffee","gi");
  let matches = str.replaceAll(Reg,"COFFEE");
  return matches
}
    