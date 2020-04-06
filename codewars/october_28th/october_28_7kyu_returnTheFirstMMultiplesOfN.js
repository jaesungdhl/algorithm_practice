Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5)
should return

vec![5, 10, 15]

function multiples(m, n){
    let newArr = [];
    for(let i = 1 ; i <= m ; i++) {
      newArr.push(n * i);
    }
    return newArr;
  }

  function multiples(m, n){
    return Array.from(Array(m), (_v, i) => (i + 1) * n);
  }