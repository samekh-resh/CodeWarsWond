function billboard(name, price = 30) {
    let total = 0;
    for (i = 0; i < name.length; i++) {
      total += price;
    }
  
    return total;
  }