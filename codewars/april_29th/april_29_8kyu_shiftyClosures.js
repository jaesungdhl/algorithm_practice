Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

var greet_abe = function() {
    let name = "Abe";
    return "Hello, " + name + '!';
  };
  
  var greet_ben = function() {
    let name = "Ben";
    return "Hello, " + name + '!';
  };

var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
  return function() {
    return "Hello, " + name + '!';
  };
}