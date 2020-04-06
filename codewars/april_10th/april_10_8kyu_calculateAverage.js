Write function avg which calculates average of numbers in given list.

function find_average(array) {
    let total = 0;
    array.forEach((element)=>{
      total += element;
    });
    return total/array.length;
  }