function descendingOrder(n){
    let arr = n.toString().split('')
    let theString = arr.sort((a, b) => b-a).join('')
    return Number(theString)
  } 