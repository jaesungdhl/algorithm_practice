nspired by the Fold an Array kata. This one is sort of similar but a little different.

Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]

function splitAndAdd(arr, n) {
    if(n === 0) return arr;
    
    let SplittedArray = [arr.slice(0, Math.floor(arr.length / 2)), arr.slice(Math.floor(arr.length / 2))];
    let CombinedArray = [];
    
    if(SplittedArray[0].length > SplittedArray[1].length) {
      SplittedArray[1].unshift(0);
    } else if(SplittedArray[0].length < SplittedArray[1].length) {
      SplittedArray[0].unshift(0);
    }
  
    for(let i = SplittedArray[0].length - 1; i >= 0; i--) {
      CombinedArray.unshift(
        SplittedArray[0][i] + SplittedArray[1][i]
      );
    }
  
    return CombinedArray.length > 1 && n > 1 ? splitAndAdd(CombinedArray, n - 1) : CombinedArray;
  }

  function splitAndAdd(arr, n) {
    if (n <= 0)
      return arr;
  
    const ln = arr.length;
    if ((ln % 2) === 1)
      arr.unshift(0);
  
    return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), n-1);
  }