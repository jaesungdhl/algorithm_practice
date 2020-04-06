Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

function arrayMash (array1, array2) {
    let newArr = [];
    for(let i = 0 ; i < array1.length ; i++) {
      newArr.push(array1[i], array2[i]);
    }
    return newArr;
  }

  arrayMash = (a, b) => a.reduce((r, e, i) => r.concat(e).concat(b[i]), []);