A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

function isNice(arr){
    if(arr.length == 0) return false;
    let nice = Array.from(arr).fill(false);
    for(let i = 0 ; i < arr.length ; i++){
      for(let elem of arr){
        if(arr[i] == elem + 1 || arr[i] == elem - 1){
          nice[i] = true;
        }
      }
    }
    return nice.every((elem) => elem == true);
  }

  function isNice(arr){
    return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
  }