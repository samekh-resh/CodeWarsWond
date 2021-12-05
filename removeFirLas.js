
function array(arr){
    if(arr.length < 5 || arr === ''){
      return null 
    }else{
      let newArr = arr.split(',')
    //removes the first from the array
    newArr.shift()
    //removes the last from the array 
    newArr.pop()
       return newArr.join(' ')
    }
    
  //   for let 
  
  }
  
  array('5,6,7')
  array('5,6,7,8,9')
  array('5,6,7,8,9,10')