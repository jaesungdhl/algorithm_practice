Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let numArr = num.toString().split("").reverse();
    for(let i = 1 ; i <= numArr.length ; i++) {
      if(numArr[i - 1] === "0") continue;
      else numArr[i - 1] = numArr[i - 1].padEnd(i, "0");
    }
    return numArr.reverse().filter(e => e !== "0").join(" + ");
  }

  const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");