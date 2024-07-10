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
// Second challenge on typescript 
type Employee ={
    id:number;
    name:string;
   department:string;
}
type Manager={
    id:number;
    name:string;
    employees:Employee[];
}
type Staff = Employee| Manager;
function printstaff(student:Staff){
    if ('employees' in student){
        console.log(`this person is manager ${student.employees.length}`)
    }
}
const kii:Employee={
    name:"Ange",
    id:34,
    department:"eng"
}
const Aline : Manager={
    id:23,
    name:"Pauline",
    employees:[kii]
}

console.log(printstaff(Aline))