You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

function oddBall(arr){
    let oddIndex = arr.indexOf("odd");
    return arr.some((elem, index) => {
      if(typeof elem == "number"){
        return elem == oddIndex;
      }
    });
  }

  function oddBall(arr){
    return arr.includes(arr.indexOf("odd"));
}