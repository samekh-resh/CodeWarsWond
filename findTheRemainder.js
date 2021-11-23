function remainder(a, b){
    return a > b ? a % b : b % a
    
  }
    
    
    //what do we need to check for? 
    //we need to check if one param is greater than another, then return the remainder
    //we are not looking for a specific remainder, which cuts down the amount of coding and thinking we need to do
    //what we already know about modulus is that when the dividing number is 0, it will return NaN, automatically, so that should cover the Divided by 0 test cases
    // i think this can be solved with a simple ternary, that states "hey if a is greater than b is true, we will modulo a by b, if it is false, we will modulo b by a"