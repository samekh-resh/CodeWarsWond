function sum() {
    //...
  
    let newSum = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number" && arguments[i] % 1 === 0) {
        newSum = newSum + arguments[i];
      }
    }
    return Math.floor(newSum);
  }