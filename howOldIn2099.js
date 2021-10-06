// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.


function calculateAge(x, y) {
    if( x === y){
      return 'You were born this very year!'
    }else if((x-1) === y){
      return 'You will be born in 1 year.'
    }else if((y-1) === x){
      return 'You are 1 year old.'
    }else if(x < y){
      let age1 = y - x
      return `You are ${age1} years old.`
    }else if(x > y){
      let age2 = x - y
      return `You will be born in ${age2} years.`
    } 
  }
  