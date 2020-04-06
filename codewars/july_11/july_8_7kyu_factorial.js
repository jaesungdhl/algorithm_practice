Yor task is to write function factorial

function factorial(n){
    if(n > 0){
      let total = n;
      for(let i = n - 1 ; i >= 1 ; i--) total *= i;
      return total;
    } else return 1;
  }

  const factorial = n => n ? factorial(n - 1) * n : 1;