Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

Examples
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

function sortDict(dict){
    return (
      Object.entries(dict)
        .sort((a,b) => Number(b[1]) - Number(a[1]))
        .map(content => {
          if(!Number(content[0])) return content;
          else return content.map(prop => Number(prop));
        })
      )
  }

  function sortDict(dict){
    return Object.keys(dict)
      .map(function(v){ return [+v || v, dict[v]] })
      .sort(function(a, b){ return a[1] < b[1] });
  }