function shortest (str){
    let newArray = str.split(' ');
    let number = [];
    for (let i=0;i<newArray.length;i++){
        let total = newArray[i].length;
        number.push(total)
    }
    
    return Math.min(...number)
}
console.log(shortest("hello ladies I have been here since morning"));