// function sumStr(a,b) {
// //take the params and convert them into numbers and put that information into a variable
//   let num1 = Number(a)
//   let num2 = Number(b)
  
//   console.log( typeof num1, typeof num2, num1, num2)
// //find the sum for the both of those numbers 
//   let sum = num1 + num2 
  
// //after finding sum, we will need to convert it back to a string
//   return sum.toString()
// }

function sumStr(a,b) {
    //take the params and convert them into numbers and put that information into a variable
    
      
    //   console.log( typeof num1, typeof num2, num1, num2)
    //find the sum for the both of those numbers 
       return (Number(a) + Number(b)).toString()
      
    //after finding sum, we will need to convert it back to a string
    //   return sum.toString()
    }
    
    //parameters- so we will need to take strings, that hold numbers, and return the sum of those strings, as a string as well
      //will there be any empty strings, if so what will they stand for? (0)
      //will there be any strings with characters? no 
      //will there be any negative numbers. yes? 
      //will there be any decimals? does not seem to be 
    //result- the result is going to be the sum of those strings, in the form of a string
    //ex "4",  "5" --> "9", '1' '2' --> '3'
    //psuedocode
      //methods that we'd use? toString, Number, parseInt?