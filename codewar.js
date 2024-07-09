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
//Bear the freelancer
function bearDollars(arr) {
  var obj = {'close friend': 1, 'friend': 2, 'acquaintance': 4};
  return arr.reduce((a,b) => a + (b[0] * ((obj.hasOwnProperty(b[1].toLowerCase())) ? obj[b[1].toLowerCase()] : 5) * 25), 0);
}
//without comparison kata
function d01(a,b) {
  let num = a-b;
  return !num?true:false
 }
 exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
exports.users.forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html

    