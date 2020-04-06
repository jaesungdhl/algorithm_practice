Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

For example:

var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85
Good luck!

Array.prototype.sum = function(){
    return !this.length ? 0 : this.reduce((a,n) => a += n);
  }

  Array.prototype.sum=function(){
    var sum=0;
    for (var i=0; i<this.length; ++i)
      sum+=this[i];
    return sum;
  }