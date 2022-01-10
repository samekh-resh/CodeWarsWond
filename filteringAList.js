function filter_list(givenList) {
    // Return a new array with the strings filtered out
    return givenList.filter(value => 
        typeof value === 'number' && value >= 0)
  }