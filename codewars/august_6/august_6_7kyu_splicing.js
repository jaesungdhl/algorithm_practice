The object of this kata is to create a function called removeValue that removes all of a certain value from an array using .splice() and then returns the array. If the array is empty or has no element to remove it should return false.

example:

    arr = [1, 2, 1, '1', 3]
    arr.removeValue(1); // returns [2, '1', 3]
For more information on .splice() visit http://www.w3schools.com/jsref/jsref_splice.asp .

Array.prototype.removeValue = function(thing) {
    if(!this.length) return false;
    if(!this.includes(thing)) return false;
    let deleteCount = 0;
    this.forEach((elem) => {
      if(elem === thing) deleteCount++;
    });
    for(let i = 0 ; i < deleteCount ; i++){
      this.splice(this.indexOf(thing), 1);
    }
    return this;
  }