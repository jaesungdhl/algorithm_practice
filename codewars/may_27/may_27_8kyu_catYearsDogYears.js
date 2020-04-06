Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = (humanYears) => {
      let yearCounter = 0;
      for(var i = 1 ; i <= humanYears ; i++){
        if(i == 1){
          yearCounter = i * 15;
        } else if(i == 2){
          yearCounter += 9;
        } else {
          yearCounter += 4;
        }
      }
      return yearCounter;
    }
    let dogYears = (humanYears) => {
    let yearCounter = 0;
      for(var i = 1 ; i <= humanYears ; i++){
        if(i == 1){
          yearCounter = i * 15;
        } else if(i == 2){
          yearCounter += 9;
        } else {
          yearCounter += 5;
        }
      }
      return yearCounter;
    }
    return [humanYears,catYears(humanYears),dogYears(humanYears)];
  }

  var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }