function removeChar(str){
    //You got this!
     return str.slice(1, -1)
   
   
   };
   
   
   //strings will always be more than two characters
   // strings will contain no numbers
   //no special characters, maybe some capital lettters? any spaces? 
   //the point of this code is to retur a string with the first and last letters removed, 
   //so if we have the string "like" , we shuld return "ik", streand learn we get 'ear'
   //psuedocode
   //i feel like th ebest way to go about this is to split them into an array 
   //splice out last and first character. then join them together and return the string. 
   //methods to use. split('').join('').splice(0, 1)
   //i realized I was over thinking this. 
   //I realized that it's very simple, why don't I just slice it. start at the first index, and end  at the -1 index (the last index)
   // with using slice, it returns an actual array with the material u sliced out. 
   // the -1 handles the las element.