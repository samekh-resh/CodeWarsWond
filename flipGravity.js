const flip=(d, a)=>{
    //TODO
    if(d === 'R'){
      return a.sort((a, b) => a - b)
    }else{
      return a.sort((a, b) => b - a)
    }
    
  }
  
  
  //we are sorting the arrays either way, however l is going to have them reversed whereas r will just give them 