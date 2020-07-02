Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']

function returnSpecifics(obj){
    let NumFuncArr = [[],[]];
    
    for(let key in obj) {
      if(typeof obj[key] === "number") {
        NumFuncArr[0].push(obj[key]);
      }
      if(typeof obj[key] === "function") {
        NumFuncArr[1].push(key);
      }
    }
    
    let ReturnArr = [...NumFuncArr[0], ...NumFuncArr[1]];
    
    return ReturnArr.length === 0 ? ["The Object is Empty"] : ReturnArr;
  }

  function returnSpecifics(obj) {
    var keys = Object.keys(obj)
    if (keys.length < 1) {
      return ['The Object is Empty']
    }
    
    var numbers = []
    var strings = []
    
    for (var i = 0, key; key = keys[i]; i++) {
      var value = obj[key]
      var type = typeof value
      if (type === 'number') {
        numbers.push(value)
      } else if (type === 'function') {
        strings.push(key) 
      }
    }
    
    return numbers.concat(strings)
  }