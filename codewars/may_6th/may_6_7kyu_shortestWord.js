Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

function findShort(s){
    let shortest = Infinity;
    let strArr = s.split(" ");
    for(var elem of strArr){
      if(elem.length < shortest){
        shortest = elem.length;
      }
    }
    return shortest;
  }

  function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }