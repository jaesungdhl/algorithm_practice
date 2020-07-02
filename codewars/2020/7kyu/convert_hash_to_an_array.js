Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.

Good Luck!

function convertHashToArray(hash){
    return Object.entries(hash).sort((a,b) => a[0] > b[0]);
  }

  const convertHashToArray = o => Object.entries(o).sort();
