JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:

typing(2);    //returns number=2
typing(true); //returns boolean=true

function typing(param){
    let Typeof = typeof param;
    
    switch(Typeof) {
      case "number":case "boolean":
        return `${Typeof}=${param}`;
      case "string":
        return `${Typeof}="${param}"`;
      case "object":
        if(Array.isArray(param)) {
          return `${Typeof}=[${param}]`;
        } else {
          return `${Typeof}=${JSON.stringify(param)}`;
        }
      case "function":
        return `${Typeof}=${param.toString()}`
      case "undefined":
        return "undefined";
    }
  }

  function typing(param) {
    if (param == null) return String(param);
    
    var type = typeof param;
    var value = type == 'function' ? param.toString() : JSON.stringify(param);
  
    return type + '=' + value;
  }