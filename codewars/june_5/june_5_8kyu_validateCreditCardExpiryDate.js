It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:

02/21
02 / 21
02 / 2021
02-2021
Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.

Good luck.

function checkExpiryValid (date) {
    let regex = /[^0-9]/;
    let expiryDate = date.split(regex).map((elem) => Number(elem));
    let expiryYear = expiryDate[expiryDate.length - 1].toString().length < 4 ? Number(`20${expiryDate[expiryDate.length - 1]}`) : expiryDate[expiryDate.length - 1];
    let today = new Date();
    return expiryYear >= today.getFullYear() ? true : false;
  }

  function checkExpiryValid (date) {
    return /^(0[1-9]|1[0-2]).+(20)?(1[7-9]|[2-9]\d)$/.test(date)
  }