Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true

// Create your numbers function here
function numbers(Params) {
    return Array.from(arguments).every(param => typeof param === "number");
  }

  function numbers() {
    return [].every.call(arguments, function(value) {
      return typeof value === "number";
    });
  }