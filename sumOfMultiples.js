function sumMul(n, m) {
    //find the multiples of n 
    //create a variable for the sum 
    //create a for loop whihc adds n to it for whatever iteration of the loop
    let sum = 0
    if (n <= 0 || m <= 0) {
        return "INVALID"
    }

    for (let i = n; i < m; i += n) {
        sum += i
    }
    return sum
    //   console.log(n,m, sum)
}