function stringy(size) {
    let newArray=[]
    for (let i =1 ;i<=size;i++){
           (i%2==0)?newArray.push(0):newArray.push(1)}
  return (newArray.join(""))
  }