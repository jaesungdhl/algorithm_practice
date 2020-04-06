Given few numbers, you need to print out the digits that are not being used.

Example:

unusedDigits(12, 34, 56, 78) // "09"
unusedDigits(2015, 8, 26) // "3479"
Note:

Result string should be sorted
The test case won't pass Integer with leading zero

function unusedDigits(...args){
    let regex = /[0-9]/;
    let missingNum = '';
    let currentNum = args.reduce((a,n) => a += n.toString(), '');
    for(let i = 0 ; i < 10 ; i++){
      if(!currentNum.includes(i)) missingNum += i.toString();
    }
    return missingNum;
  }

  function unusedDigits(...args){
    return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
  }