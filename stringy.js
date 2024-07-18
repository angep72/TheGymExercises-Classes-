function stringy(size) {
    let newArray=[]
    for (let i =1 ;i<=size;i++){
           (i%2==0)?newArray.push(0):newArray.push(1)}
  return (newArray.join(""))
  }
  //simple beads count
  function countRedBeads(n) {
    return n<2?0:(n*2)-2
  }