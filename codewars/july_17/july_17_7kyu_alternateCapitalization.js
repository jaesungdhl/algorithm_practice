Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

function capitalize(s){
    return s.split("").reduce((a, n, i) => {
      if(i % 2 == 0){
        a[0] += n.toUpperCase();
        a[1] += n;
        return a;
      } else {
        a[0] += n;
        a[1] += n.toUpperCase();
        return a;
      }
    }, ['','']);
  };

  function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };