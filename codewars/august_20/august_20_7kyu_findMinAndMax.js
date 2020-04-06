Write function getMinMax that returns minimal and maximal value of not empty list.

function getMinMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  };

  function getMinMax(arr){
    const sorted = arr.sort((a,b)=>a-b)
    return [sorted[0], sorted[sorted.length - 1]]
  };