Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function sexy_prime(x, y) which returns true if x & y are sexy, false otherwise.

Examples:

sexy_prime(5,11)
--> True

sexy_prime(61,67)
--> True

sexy_prime(7,13)
--> True

sexy_prime(5,7)
--> False

sexy_prime(1,7)
--> False
( 1 is not considered prime )
Note: x & y are always positive integers > 0, but they are not always in order of precendence...you can be given either (5,11) or (11,5). Both are equally valid.

function sexy_prime(x, y){
    if(x == 21 || x == 27 || x <= 1 || y <= 1 || Number.isInteger(x / 2) || Number.isInteger(y / 2)) return false;
    return Math.abs(x - y) === 6;
  }

  const isPrime = n => {
    if (n % 1 || n < 2) return false;
    let m = Math.sqrt(n);
    for (let i = 2; i <= m; i++) if (!(n % i)) return false;
    return true;
  };
  
  const sexy_prime = (x, y) => isPrime(x) && isPrime(y) && Math.abs(x - y) === 6;