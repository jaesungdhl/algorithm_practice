Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

greet("maya") # returns "Hello Maya!"
greet("JACK") # returns "Hello Jack!"

var greet = function(name) {
    return `Hello ${name.split("").map((c,i) => !i ? c.toUpperCase() : c.toLowerCase()).join("")}!`;
  };

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};