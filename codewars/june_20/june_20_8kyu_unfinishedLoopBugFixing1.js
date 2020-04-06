Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!

function createArray(number){
    var newArray = [];
    for(var i = 0 ; i < number ; i++){
      newArray.push(i + 1);
    }
    return newArray;
  }

  function createArray(number){
    return Array(number).fill(1,0).map((x,i) => x + i)
  }