//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
  let reducer = (a, b) => a * b
  return x.reduce(reducer)
}
