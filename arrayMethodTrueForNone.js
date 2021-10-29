function none(arr, fun) {
    return !arr.some(fun) //basically says that if this is true, the bang operator flips it's value to false, so it's saying that the inverse is going to happen
}