const areaOrPerimeter = function(l , w) {
    //classic if else statement comparing the values of the parameters in the condition, if they are not equal it will initiate a code that returns a perimeter but if they are equal it will return the area
    //rectangle returns perimeter
    if( l < w || l > w){
      let perimeter = l + w + l + w
      return perimeter
    }else if(l === w){
      let area = l * w
      return area
    }
    
    //square returns area
    // Return your answer
  };