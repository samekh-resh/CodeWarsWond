function abbrevName(name){
    let arr = name.split(' ').map((word) => word.split('').shift())
    
    return arr.join('.').toUpperCase()
      // code away
  
  }