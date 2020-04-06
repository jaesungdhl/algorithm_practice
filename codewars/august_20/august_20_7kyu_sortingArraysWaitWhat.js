Sorting an array of positive integers
Background
You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

Task
Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

Extension
If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.

// Fix the sort() method for arrays here.

Array.prototype.sort = function () {
    for(let j = this.length - 1 ; j >= 1 ; j--) {
      for(let i = this.length - 1 ; i >= 1 ; i--) {
        if(this[i] < this[i - 1]){
          let temp = this[i];
          this[i] = this[i - 1];
          this[i - 1] = temp;
        }
      }
    }
    return this;
  }

  Array.prototype.sort = function () {
    for(var i=0;i<this.length-1;i++){
      for(var j=this.length-1;j>=i;j--){
        if(this[j]>this[j+1]){
          [this[j],this[j+1]]=[this[j+1],this[j]];
        }
      }
    }
    return this;
  }

  Array.prototype.sort = function () { return [...(new Int32Array(this)).sort()] }