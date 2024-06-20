function sayHello() {
    setTimeout(()=>{console.log("Hello!")},1000)
    }// Uncomment the line below when ready
     sayHello(); // should log "Hello" after 1000ms
    
    
    // Challenge 2
    var promise = new Promise(function (resolve) {
      setTimeout(()=>{
        resolve('Resolved!')
      },1000)
    });
    promise.then((res)=>{
      console.log(res)
    })
    
    // Should print out "Resolved!"
    // ADD CODE HERE
    
    
    // Challenge 3
    
    promise = new Promise(function(resolve, reject) {
     reject("Rejected")
    })
    promise.catch((error)=>{
      console.log(error)
    })
    
    // Should print out "Reject!"
    // ADD CODE HERE
    
    
    // Challenge 4
    
    promise = new Promise(function (resolve, reject) {
      resolve('Promise has been resolved')
    });
    
    // Uncomment the lines below when ready
     promise.then(() => console.log('Promise has been resolved!'));
    console.log("I'm not the promise!");
    
    
    // Challenge 5
    function delay(){
    return new Promise((resolve)=>{
      setTimeout (()=>{
        resolve("resolve")
      },1000)
    })
    }
    
    // Uncomment the code below to test
    // This code should log "Hello" after 1000ms
     delay().then(sayHello);
    
    
    // Challenge 6
    //
    // ADD CODE BELOW
     var secondPromise =new Promise((resolve,reject)=>{
       resolve("resolved!")
     })
     var firstPromise = new Promise((resolve,reject)=>{
       resolve(secondPromise)
     })
    firstPromise.then((value) => console.log('Challenge 6', value));
    
    
    // Challenge 7
    const fakePeople = [
      { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
      { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
      { name: 'Harold', hasPets: true, currentTemp: 98.3 },
    ]
    
    const fakeAPICall = (i) => {
      const returnTime = Math.floor(Math.random() * 1000);
      return new Promise((resolve, reject) => {
        if (i >= 0 && i < fakePeople.length) {
          setTimeout(() => resolve(fakePeople[i]), returnTime);
        } else {
          reject({ message: "index out of range" });
        }
      });
    };
    
    function getAllData() {
      return Promise.all([fakeAPICall(0),fakeAPICall(1),fakeAPICall(2)])
    .then(function(values) {
              return values;
            });
    }
      
    getAllData().then((values) => console.log('Challenge 7', values));
    
    
    
    