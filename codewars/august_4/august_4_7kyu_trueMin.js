The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
}

function min(A, B){
    let [a,b] = arguments;
    if(a === null) a = 0;
    if(b === null) b = 0;
    if(Number.isNaN(a) || Number.isNaN(b) || a === undefined || b === undefined) return NaN;
    return [a,b].sort((a,b) => a - b)[0];
  }
    
  function min(a, b){
    return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
  }