function myCount (arr:number[]){
    type User={
        [key:string]:number
    }
    let count:User={}
    arr.forEach((el)=>{
        if(count[el]){
            count[el]+=1
        }else{
            count[el]=1
        }
    })
    return count
}
console.log(myCount([12,3,4,5,6,7,5,4,5,4,5,4,5]))