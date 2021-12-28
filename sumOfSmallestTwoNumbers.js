function sumTwoSmallestNumbers(numbers) {
  
    let sorted = [...numbers].sort((a,b) => a-b)
    
    return sorted[0] + sorted[1]
  }