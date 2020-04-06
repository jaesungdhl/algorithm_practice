Complete the solution, so that it returns the truncated version of the string followed by '...'.

Example:

solution('Testing String',3) // should return 'Tes...'
solution('Testing String',8) // should return 'Testing ...'
solution('Test',8) // should return 'Test'

function solution(string,limit){
    return string.length > limit ? `${string.slice(0, limit)}...` : string;
  }

  function solution(string,limit){
    if(limit < string.length) {
      return string.slice(0, limit) + '...';
    }
    else {
      return string;
    }
  }