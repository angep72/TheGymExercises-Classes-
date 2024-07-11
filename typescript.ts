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
    function differenceOfSquares(n:number):number {
        let sum:number=0
        let product:number=0
        for (let i=0;i<n;i++){
         sum= sum+i
         product=product+sum;
        }
        let result:number= (sum*sum)-product
        return result
    }
    console.log(differenceOfSquares(23))
    //Sorting usind array of arrays 
    function sort(initialArray:string[], sortingArray:number[]):string[] {
        let newArr:string[]=[];
        for (let a in initialArray){
          console.log(initialArray[a])
          newArr[sortingArray[a]]=initialArray[a]
        }
        return newArr
      }
      console.log(sort(['x', 'y', 'z'],[1,2,0]))
      