let toBuy = function (x, arr) {

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == x) {
          return [i, j];
        }
      }
    }
    return null;
  };