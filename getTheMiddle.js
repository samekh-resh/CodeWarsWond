function getMiddle(s) {
    //declaring variables
    //Code goes here!
    let middle;
    let length;
  
    if (s.length % 2 == 1) {
      middle = s.length / 2;
      length = 1;
    } else {
      middle = s.length / 2 - 1;
      length = 2;
    }
  
    return s.substring(middle, middle + length);
  }