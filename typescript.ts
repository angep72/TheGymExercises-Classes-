// function myCount (arr:number[]){
//     type User={
//         [key:string]:number
//     }
//     let count:User={}
//     arr.forEach((el)=>{
//         if(count[el]){
//             count[el]+=1
//         }else{
//             count[el]=1
//         }
//     })
//     return count
// }
// console.log(myCount([12,3,4,5,6,7,5,4,5,4,5,4,5]))
// // Second challenge on typescript 
// type Employee ={
//     id:number;
//     name:string;
//    department:string;
// }
// type Manager={
//     id:number;
//     name:string;
//     employees:Employee[];
// }
// type Staff = Employee| Manager;
// function printstaff(student:Staff){
//     if ('employees' in student){
//         console.log(`this person is manager ${student.employees.length}`)
//     }
// }
// const kii:Employee={
//     name:"Ange",
//     id:34,
//     department:"eng"
// }
// const Aline : Manager={
//     id:23,
//     name:"Pauline",
//     employees:[kii]
// }

// console.log(printstaff(Aline));
// //How to use abstract class 
// abstract class Computer {
//     readonly id:number=0
//     abstract brand:string;
//     abstract ram:number;
//     storage?:number
//     abstract upgrade(num:number):number
    
//     }
//     class laptop implements Computer{
//         name:string
//         constructor(name:string){
//         this.name=name
//         }
//      id=2
//     brand="hp"
//     ram=34
//     upgrade(num:number):number{
//         return 0
//     }
//     }
//     const person = new laptop("lenevo");
//     console.log(person.id)
    // let result:string | number;
    // function myNumber (x:string)


    // Fiinding the difference of numbers
    // function differenceOfSquares(n:number):number {
    //     let sum:number=0
    //     let product:number=0
    //     for (let i=0;i<n;i++){
    //      sum= sum+i
    //      product=product+sum;
    //     }
    //     let result:number= (sum*sum)-product
    //     return result
    // }
    // console.log(differenceOfSquares(23))
    // //Sorting usind array of arrays 
    // function sort(initialArray:string[], sortingArray:number[]):string[] {
    //     let newArr:string[]=[];
    //     for (let a in initialArray){
    //       console.log(initialArray[a])
    //       newArr[sortingArray[a]]=initialArray[a]
    //     }
    //     return newArr
    //   }
    //   console.log(sort(['x', 'y', 'z'],[1,2,0]))
    //   //retruning the sum of digits 
    //   export function sumDigits(n: number): number {
    //     let num = n.toString().split("").map((el)=>Number(el)).reduce((acc,curr)=>acc+curr,0)
    //     return num
    //   }
    //   console.log(sumDigits(23))
    
    // Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
    // type result=number|string|boolean;
    // function mynumber(x:result){
    //     console.log(typeof mynumber)
    // }
    // console.log(mynumber(true))
    
    // 
    //
    //  Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this.  
    // interface Car {
    //     make:string;
    //     model:string;
    // }
    // type Bus= {
    //     make:string;
    //     model:string;
    //     payload?:number
    // }
    // type Vehicle = Bus|Car
    // const car:Car={
    //     make:"Benz",
    //     model:"p34"
    // }
    // const bus:Bus={
    //     make:"Range",
    //     model:"rava",
    // }
    // const vehicle:Vehicle[]=[car,bus]

// function mynumber(x:string|number):void{
//     if (typeof x === "string"){
//         console.log(`This is an official string bab`)
//     }if (typeof x === "number"){
//         console.log(`Hello this a number`)
//     }
//     }
//     console.log(mynumber(2))

//Type of guards typof 
function mynumber (x:number):boolean{
    if (typeof x === "number"){
        return true
    }else{
    return false
    }
}
console.log(mynumber(3))
















