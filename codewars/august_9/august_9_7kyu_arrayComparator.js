You have two arrays in this kata, every array contain only unique elements. Your task is to calcualate number of elements in first array which also are in second array.

function matchArrays(v,r){
    let counter = 0;
    for(let i = 0 ; i < v.length ; i++){
      if(r.includes(v[i])) counter++;
    }
    return counter;
  }

  const matchArrays = (v, r) => v.filter(e => r.indexOf(e) != -1).length;