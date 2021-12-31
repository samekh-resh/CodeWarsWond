function highAndLow(numbers){
    let arr = numbers.split(' ')
    console.log(Math.max(...arr))
    return Math.max(...arr) + ' ' + Math.min(...arr)
  }