function past(h, m, s){
    hours = h * 3600000
     minutes = m * 60000
     seconds = s * 1000
     time = hours + minutes + seconds
     return time
   }