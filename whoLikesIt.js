function likes(names) {
    // spread op -> count length of array -> have different if statements
    
    // if empty -> return string "no one likes this"
    // or if 1 string -> return string "arr[0] likes this"
    // or if 2 strings -> return string "arr[0] and arr[1] like this"
    // or if 3 strings -> return string "arr[0], arr[1] and arr[2] like this"
    // or if 4 (or more) strings -> return string "arr[0], arr[1] and arr.length - 2 like this"
    
    if(names.length === 0){
      return "no one likes this"
    } else if (names.length === 1){
      return `${names[0]} likes this`
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    
    // return string
  }