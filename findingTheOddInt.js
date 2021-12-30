function findOdd(Arr) {
    for(let i=0; i<Arr.length; i++){
      let uniqueLength = Arr.filter((num) => num === Arr[i]).length // filter goes through each unique number and finds the "length"/how many times they appear
      if(uniqueLength % 2 !== 0){
        return Arr[i]
      }
    }
    return 0;
  }