function calculate(str) {
    let numCount = str.match(/\d+/g).map(e => Number(e));
    let signCount = str.match(/plus|minus/gi);
    let total = numCount[0];
    for(let i = 1 ; i < numCount.length ; i++) {
      if(signCount[i - 1] === "plus") total += numCount[i];
      else total -= numCount[i];
    }
    return total.toString();
  }

  function calculate(str) {
    let numbers = str.split(/plus|minus/);
    let operations = str.match(/[a-z]+/g);
    let sum = parseInt(numbers[0]);
    for(let i = 0, len = operations.length; i < len; i++){
      switch(operations[i]){
        case "plus":
          sum += parseInt(numbers[i+1]);
          break;
        case "minus":
          sum -= parseInt(numbers[i+1]);
          break;
      }
    }
    return sum+"";
  }