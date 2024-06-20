let yellow = (a,b)=>a*b
// console.log(yellow(2,4))
// let numbers = [1,2,3,4,5,5,5]
// let result = new Set(numbers);
// console.log(result)
// class product{
//     constructor(name,price){
//         this.name = name;
//         this.price=price;
//     }
//     get getDetails(){
//         return (this.name);
//     }
// }
// let newOb = new product("Ange");
// console.log(newOb.getDetails)
 function * fib (limit){
     let a = 0
     let b = 1
     while (a<=limit){
         yield a;
         [a,b] = [b,a+b]
         
     }
     
 }
 let result = fib(5);
 for (r of result){
     console.log(r)
 }

function secureConfig(config) {
    // Step 1: Define a new Symbol for the apiKey
    const apiKeySymbol = Symbol('apiKey');

    // Step 2: Add the Symbol as a key to the config object with the corresponding value
    config[apiKeySymbol] = 'your_api_key_here'; // Replace 'your_api_key_here' with the actual API key

    // Step 3: Return the modified config object
    return config;
 }

// Example usage
const myConfig = { database: 'myDatabase', port: 3000 };
const securedConfig = secureConfig(myConfig);

console.log(securedConfig); // Logs the original config object
console.log(securedConfig[Symbol.for('apiKeySymbol')]); // Logs the API key
  //function createValidationProxy(obj){
     // const handler = {
//           set:(target,prop,value)=>{
//               if (prop === "name" && typeof value !== "string"){
//                   throw error("invalid input");
//               }
//               target[prop]=value
              
//           }
         
//       }
//       return new Proxy (obj,handler); 
//   }
//   const user = { name: "john", email: "john@doe.com", age: 30 };

// const userProxy = createValidationProxy(user);

// // Try accessing and modifying the user object's properties
// console.log(userProxy.name=123); // logs "John Doe"
// console.log(userProxy.email); // logs "john@doe.com"
// console.log(userProxy.age); //
// import {add,multiply} from './number.mjs'
// console.log(add(2,4))
// console.log(multiply(2,4))
// function combineCarts(cart1, cart2) {
//     // Using the spread operator to combine the contents of cart1 and cart2
//     return [...cart1,...cart2];
//   }
  
//   // Example usage
//   const cart1 = ['apple', 'banana'];
//   const cart2 = ['orange', 'grape'];
  
//   const combinedCart = combineCarts(cart1, cart2);
//   console.log(combinedCart); // Output: ['apple', 'banana', 'orange', 'grape']
  
//   const originalObject = { name: 'John', age: 30, address: { city: 'New York' } };

// const copiedObject = Object.assign({}, originalObject);

// console.log(copiedObject); // Output: { name: 'John', age: 30, address: { city: 'New York' } }

// const originalObject = { name: 'John', age: 30, address: { city: 'New York' } };

// const copiedObject = {...originalObject };

// console.log(copiedObject); // Output: { name: 'John', age: 30, address: { city: 'New York' } }

function logExecutionTime(target, key, descriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
  
      console.log(`Execution time for ${key}: ${end - start} milliseconds`);
  
      return result;
    };
  
    return descriptor;
  }
  
  class Timer {
    logExecutionTime
    heavyComputation() {
      // Simulate a heavy computation
      for (let i = 0; i < 1000000000; i++) {}
    }
  }
  
  const timer = new Timer();
  timer.heavyComputation(); // Logs execution time
  