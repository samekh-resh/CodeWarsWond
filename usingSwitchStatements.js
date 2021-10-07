function howManydays(month) {
    switch (month) {
        case 2: return 28
        case 4:
        case 6:
        case 9:
        case 11: return 30
    }
    return 31
}

  //basically the idea is here, focus on the 30 and 28 day months, create casses for those to handle it, 
  //then we let the return handle any month that does match the other cases. 