function minValue(values) {
    
    let myValues = [...new Set(values)];
  
    let sortones = parseInt(myValues.sort((a, b) => a - b).join(""));
  
    return sortones;
  }