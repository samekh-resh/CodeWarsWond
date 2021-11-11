
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
    let wholeArr = arr1.concat(arr2)

    return wholeArr.reduce(getSum, 0)
}

function getSum(total, num) {
    return total + num
}


  //we'd want to combine the arrays, best way to do this would possibly be to use the .concat method
  // on top of that, the order isn't necessary, so we wouldn't need to use the .sort method
  // re can use the reduce method to get the sum, however it needs another function to pass through so the reduce method can work. 