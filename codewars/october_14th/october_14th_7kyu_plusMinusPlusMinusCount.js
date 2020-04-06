Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5]

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

return 2;

const catchSignChange = arr => {
    let changeCount = 0;
    let newArr = arr.map(num => !num ? 1 : num);
    for(let i = 0 ; i < arr.length - 1 ; i++) {
      if(Math.sign(newArr[i]) !== Math.sign(newArr[i + 1])) changeCount++;
    }
    return changeCount;
  };

  function catchSignChange(arr) {
    return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
  }