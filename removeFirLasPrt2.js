function array(arr){

    //we're simply splitting the array so that all the characters are in it's own element, without the commas
    let arrNew = arr.split(',')
    //removing last and affecting the array
    arrNew.pop()
    //remove first while affecting the arrau
    arrNew.shift()
    //this cute lil ternary is saying hey, if the arrNew has a length, then we'll join it with a space and return it, if it does not have length then we will return null
    return arrNew.length ? arrNew.join(' ') : null

    //so the reason for this ternary is to check for if the array, after all these methods, still has something in it. the logic behind this is that if the original argument had enough numbers in it, it should have at least some lenght. but if the argument only had, let's say, two numbers, after the pop and shift, there would be nothing left, equalling an empty array, equaling no length. 
    
   
  }
  