function invert(array) {
    let invert = []; //create an array to push new values to
    for(let i = 0; i < array.length; i++){ //looping through the array
      if(array[i] > 0){ //checking it the elements value is more than 0
        invert.push(array[i] - (array[i] * 2)); //we initiate an equation that multiplesthe value twice then subtract it, to give it a neg value
      }
      
      if(array[i] < 0){ //check 4 neg vals
        invert.push(Math.abs(array[i])); //using abs. method to return the absolute value of the number, so if it's neg 2 it becomes two, -6 = 6 and so on
      }
  
      if(array[i] == 0){ //weird edge case for negative zeroes
        
        invert.push(-0);
      }
    }
  
    return invert;
  }