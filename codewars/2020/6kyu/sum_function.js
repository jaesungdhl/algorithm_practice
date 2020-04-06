Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5
HINT : use closures

function sum(x) {
    return arguments.length > 1 ? 
      Array.from(arguments).reduce((a,n) => a += n) : 
      function(num) {
        let savedValue = x;
        return Array.from(arguments).reduce((a,n) => a += n) + savedValue;
      }
  }

  function sum(...a) {
    return a.length === 2 ? a[0] + a[1] : function (x) {
      return a[0] + x;
    };
  }