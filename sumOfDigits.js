function digital_root(n) {
    // ...
    let numbers = n.toString().split("").map(Number);
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let subNumbers = sum.toString();
    if (minNumber.length > 1) {
      var sumNumbers = sumString.split("").map(Number);
      var firstSumDigit = sumNumbers.slice(0);
      var lastSumDigit = sumNumbers.slice(-1);
      return firstSumDigit[0] + lastSumDigit[0];
    } else {
      return sum;
    }
  }
  