function finalGrade(exam, projects) {
    let theFinalScore = 0
    if ((exam > 90) || (projects > 10)) {
        theFinalScore = 100
    } else if ((exam > 75) && (projects >= 5)) {
        theFinalScore = 90
    } else if ((exam > 50) && (projects >= 2)) {
        theFinalScore = 75
    } else {
        theFinalScore = 0
    }
    return theFinalScore
}

console.log('this is your final score for 1', finalGrade(91, 11))
console.log('this is your final score for 2', finalGrade(100, 12))
console.log('this is your final score for 3', finalGrade(10, 15))
console.log('this is your final score for 4', finalGrade(99, 0))
console.log('this is your final score for 5', finalGrade(85, 5))
console.log('this is your final score for 6', finalGrade(55, 3))
console.log('this is your final score for 7', finalGrade(55, 0))
console.log('this is your final score for 8', finalGrade(20, 2))
  ///get two params, one stands for an exam grade and one stands for a number of completed projects
  //sooo, it'll return 100 if the exam is > 90 && the projects is > 10
  // 90 if exam is > 75 && 5 
  // 75 if exam is > 50 projects is >= 2

  // 0 for anything else. 

  //switch case would be cooler. 