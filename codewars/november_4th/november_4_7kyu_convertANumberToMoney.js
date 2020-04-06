Simplified number to money converter.

Note:

truncate to 2 decimal places
don't keep trailing zeros
input will be a positive number with at least two trailing digits
Examples:

2546.2562 --> '2,546.25'

1500.342626 --> '1,500.34'

100.2134 --> '100.21'

Taken from 'Formatting a number as price' (Kyu 5)

var numberToMoney = function(n) {
    let intDec = n.toString().split(".");
    let newVal = intDec.map((dollar, index) => {
        if(index === 0) {
          let newDollar = "";
          let oldDollar = dollar.split("").reverse();
          for(let i = 0 ; i < oldDollar.length ; i++) {
            if(i === 3) newDollar += ",";
            newDollar += oldDollar[i];
          }
          return newDollar.split("").reverse().join("");
        } else {
          let newCents = dollar.slice(0,2);
          return newCents[1] === "0" ? newCents[0] : newCents;
        }
      });
      return newVal[1] === "0" ? newVal[0] : newVal.join(".");
  };

  function numberToMoney(n) {
    return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }