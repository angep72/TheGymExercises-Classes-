const person = { name: 'John', age: 30 };
const { name, age, profession = 'Unknown' } = person;
console.log(name); 
 console.log(age); 
 console.log(profession); 

//Edge Case 2
const user = {
  id: 101,
  personalInfo: {
    name: 'Alice',
    age: 25,
  },
  posts: ['Post 1', 'Post 2']
};

const {
  personalInfo: { name: userName, age: userAge },
  posts: [firstPost, secondPost]
} = user;

console.log(userName);
 console.log(userAge); 
 console.log(firstPost); 
 console.log(secondPost);