Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function() {
    let randColor =  Math.floor(4 * Math.random())
    let red = "red";
    let white = "white";
    let purple = "purple";
    let yellow = "yellow";
    if(randColor == 1){
      this.color = red;
    } else if(randColor == 2){
      this.color = white;
    } else if(randColor == 3){
      this.color = purple;
    } else {
      this.color = yellow;
    }
  };

  var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
  };