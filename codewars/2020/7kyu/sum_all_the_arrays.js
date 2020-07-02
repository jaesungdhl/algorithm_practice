You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

function arraySum(arr) {
    return arr.reduce((a,n) => {
      if(typeof n === "function" || typeof n === "string") return a;
      
      if(Array.isArray(n)) {
        a += GetArraySum(n);
        return a;
      }
      
      a += n;
      return a;
    }, 0)
  }
  
  function GetArraySum(arr) {
    if(!Array.isArray(arr)) return arr;
    
    return arr.reduce((a,n) => {
      if(typeof n === "function" || typeof n === "string") return a;
    
      if(Array.isArray(n)) {
        a += GetArraySum(n);
        return a;
      }
      
      a += n;
      return a;
    }, 0)
  }

  function arraySum(arr) {
    return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
  }