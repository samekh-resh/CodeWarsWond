function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
  }

  //task was to create a multiples table that returns a string of the numbers 1-10, the value input and the product. 
  