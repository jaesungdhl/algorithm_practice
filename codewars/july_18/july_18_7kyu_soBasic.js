Summary: In this kata we want to communiate with a Mayan accountant.

Scenario: You work for the IRS and have been sent the 1040 form for a local Mayan retailer. The Mayan apparently speaks perfect English but has accidentally filled out his Adjusted Gross Income (AGI) in Mayan.

Task: Generate a javascript method that converts a base-20 value into its decimal equivalent.

function convertBase20ToDecimal(init){
    let decimal = parseInt(init, 20);
    return Number.isNaN(decimal) ? -1 : decimal;
  }

  function convertBase20ToDecimal(i){return isNaN(a=parseInt(i,20))?-1:a}