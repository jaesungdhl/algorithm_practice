function horses(n) {
    if(n < 3 && Number.isInteger(n)) return n;
    if(typeof n !== "number" || !Number.isInteger(n)) return undefined;
  
    return Factorial(n) / Factorial(n - 3);
  }
  
  function Factorial(n) {
    if(n === 0) return 1;
    
    let Sum = n * Factorial(n - 1);
    return Sum;
  }

  function horses(n) {
    if (Number.isInteger(n)) return n<3 ? n : n*(n-1)*(n-2);
  }