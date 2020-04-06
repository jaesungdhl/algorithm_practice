You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument will be numbers.
The third argument will represent a sign indicating the operation to perform on these two numbers.

Example:
calculator(1,2,"+"); //=> result will be 3
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!

function calculator(a,b,sign){
    console.log(typeof a, typeof b);
    return typeof a == 'number' && typeof b == 'number' && (sign == '+' || sign == '-' || sign == '*' || sign == '/') ? eval(`${a} ${sign} ${b}`) : 'unknown value';
  }

  function calculator(a,b,sign){
    if ((typeof a === "number") && (typeof b === "number")) {
      switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      }
    }
    return "unknown value";
  }