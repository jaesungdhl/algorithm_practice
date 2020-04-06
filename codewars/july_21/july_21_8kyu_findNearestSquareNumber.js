Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

function nearestSq(n){
    if(Number.isInteger(Math.sqrt(n))) return n;
    else {
      for(let i = n + 1, j = n - 1 ; i < Number.POSITIVE_INFINITY; i++, j--){
        if(Number.isInteger(Math.sqrt(i))) return i;
        else if(Number.isInteger(Math.sqrt(j))) return j;
      }
    }
  }

  const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);