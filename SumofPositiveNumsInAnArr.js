function positiveSum(arr) {
    let sum = 0
    arr.forEach(num => num > 0 ? sum+=num : sum)
    return sum
  }