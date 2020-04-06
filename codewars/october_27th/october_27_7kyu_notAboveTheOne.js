Write an algorithm to remove all the numbers above 1 from the given array.

Just in case we want to make any changes, create an array of the indexes of the removed numbers.

Return a nested array or a tuple:

the first array being only the 1s and 0s
the second array being the indexes of the removed numbers
[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ]
should return

[ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
Please upvote and enjoy!

function binaryCleaner(arr) {
    return (
      arr.reduce((a,n,i) => {
        if(n <= 1) {
          a[0].push(n);
          return a;
        } else {
          a[1].push(i);
          return a;
        }
      }, [[],[]])
    )
  }

  function binaryCleaner(a) {
    let r = [[], []];
    a.map((x, i) => x < 2 ? r[0].push(x) : r[1].push(i));
    return r;
  }