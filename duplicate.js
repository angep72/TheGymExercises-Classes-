function removeDuplicateWords (s) {
    let result = [];
    let newArr = s.split(" ");
    for (a in newArr){
      if (result.indexOf(newArr[a])=== -1){
        result.push(newArr[a])
      }
    }
    return result.join(" ")
  }