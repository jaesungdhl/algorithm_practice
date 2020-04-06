In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence. 
You will be given three parameters :

`first` the first term in the sequence
`c` the constant that you are going to ADD ( since it is an arithmetic sequence...)
`l` the number of terms that should be `return`ed
Useful link:
Sequence
Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)

var seqlist = function(first,c,l){
    let newArr = [];
    for(let i = first , j = 0 ; j < l ; i += c, j++){
      newArr.push(i);
    }
    return newArr;
  }

  function seqlist(first, c, l) {
    for (var list = []; list.length < l; )
      list.push(first + c * list.length);
    return list;
  }