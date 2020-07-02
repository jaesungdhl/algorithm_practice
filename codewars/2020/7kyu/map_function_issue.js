In computer science, a programming language is said to have first-class functions if it treats functions as first-class citizens. Specifically, this means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures.

First-class functions are a necessity for the functional programming style, in which the use of higher-order functions is a standard practice. A simple example of a higher-ordered function is the map function, which takes, as its arguments, a function and a list, and returns the list formed by applying the function to each member of the list. For a language to support map, it must support passing a function as an argument. See more on https://en.wikipedia.org/wiki/First-class_function

Your task is to rewrite your own map function which takes :

an array
a predicate function func which returns true (boolean) with even arguments
For example :

map([1,2,3,4],func)

produces

[ false, true, false, true ]  
The code also has to perform input validation, return :

'given argument is not a function' if func is not a function
'array should contain only numbers' if any elements are not numbers


var func = function(item){
    //your code here
    return item % 2 === 0;
}

function map(arr, someFunction){
    /* your code here
    note: Javascript already supports all this, we are just rewriting our own
    map() function with some quirk and error message */
    if(typeof someFunction !== "function") return "given argument is not a function";
    if(!arr.every(e => !Number.isNaN(Number(e)))) return "array should contain only numbers";
    
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
      newArr.push(someFunction(arr[i]));
    }
    
    return newArr;
}

function func(item) {
    return (item & 1) == 0
  }
  
  function map(arr, func) {
    if (typeof func != "function") return "given argument is not a function"
    if (arr.length < 1 || arr.some(isNaN)) return "array should contain only numbers"
    return arr.map(func)
  }