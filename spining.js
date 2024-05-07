function spinWords(string){
    let newArray = string.split(' ');
     for (let i=0;i<newArray.length;i++){
         if (newArray[i].length >= 5){
             newArray[i]=newArray[i].split('').reverse().join('');
         }
         
     }
     return newArray.join(' ')
     
 }