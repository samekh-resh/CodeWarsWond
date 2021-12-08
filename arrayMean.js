function getAverage(marks){
    let avg = marks.reduce((a, b)=> a + b) / marks.length;
    return Math.floor(avg)
  }