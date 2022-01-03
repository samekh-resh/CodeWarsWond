function getAverage(marks){
  
  
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    let newValue = marks.reduce(reducer, 0)
    
    return Math.floor(newValue / marks.length)
    //use the reduce to get the sum
    //then return the value of the sum divided by the length of the array? 
  }