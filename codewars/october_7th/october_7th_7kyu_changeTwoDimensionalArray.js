Function receive a two-dimensional array of random integers. On the main diagonal all the integers of this array with the sign (-) must be changed to 0, and the integers with a sign (+) must be changed to 1.

Example:

incoming array [ [ -1, 4, -5, -9, 3 ], [ 6, -4, -7, 4, -5 ], [ 3, 5, 0, -9, -1 ], [ 1, 5, -7, -8, -9 ], [ -3, 2, 1, -5, 6 ] ]

output array [ [ 0, 4, -5, -9, 3 ], [ 6, 0, -7, 4, -5 ], [ 3, 5, 1, -9, -1 ], [ 1, 5, -7, 0, -9 ], [ -3, 2, 1, -5, 1 ] ]

function matrix(array) {
    for(let i = 0, j = 0 ; i < array.length ; i++, j++) {
      if(array[i][j] >= 0) array[i][j] = 1;
      else array[i][j] = 0;
    }
    return array;
  }

  function matrix(a) {
    return a.map((a,i)=>a.map((a,j)=>i==j?+!(a<0):a))
}