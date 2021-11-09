function isDivisible(n, x, y) {

    if (n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }

}

  //creating a function that checks if n is divisible by x AND y
  //all inputs are numbers, POSITIVE ,and NON-ZERO

  //WHAT COULD WE DO?
  //we could return false if it's not met and true if the conditions are met
  //we could use a modulo to check to see if n is divisible by them (x and y)