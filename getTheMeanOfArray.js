function getAverage(marks){
    //prep
    //parameters take an array, and get the mean of the array scores. 
    //would probably need to make a loop to loop through the values, adding it tot he total scroe
    ///then divide that via the length of the array
    //floor that number so it's rounded down. 
    let total = 0;
    for(let i = 0; i < marks.length; i++){
      total += marks[i]
      
    }
    
    return Math.floor(total / marks.length)
  }

  