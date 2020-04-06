Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let compareSort = array.slice().map(c => String(c)).join("");
    let ascending = array.slice().sort((a,b) => a - b).map(c => String(c)).join("");
    let descending = array.slice().sort((a,b) => b - a).map(c => String(c)).join("");
    return (
      compareSort == ascending ? "yes, ascending" :
      compareSort == descending ? "yes, descending" :
      "no"
    )
  }

  function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }