Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.

Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)

function generateRange(min, max, step){
    let newArr = [];
    for(var i = min; i <= max; i += step){
      newArr.push(i);
    }
    return newArr;
  }

  function generateRange(min, max, step) {
    for (var res = []; min <= max; min += step) res.push(min)
    return res
  }