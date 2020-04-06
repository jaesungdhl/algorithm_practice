Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


const countPositivesSumNegatives= (arr) => {
    if(arr === null || arr.length === 0){
      return [];
    }
      let newArr = [0, 0];
      for(var elem of arr){
        if(elem > 0){
          newArr[0]++;
        }
      }
      for(var elem of arr){
        if(elem < 0){
          newArr[1] += elem;
        }
      }
      return newArr;
    }

    function countPositivesSumNegatives(input) {
        if (!Array.isArray(input) || !input.length) return [];
        return input.reduce((arr, n) => {
          if (n > 0) arr[0]++;
          if (n < 0) arr[1] += n;
          return arr;
        }, [0, 0]);
      }