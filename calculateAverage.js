// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  // your code here
  if(array.length === 0 ){
    return 0 
  }
  let grades = array.reduce((a, b) => a + b)
  return grades /array.length
}
