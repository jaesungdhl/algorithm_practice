Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
  console.log(date)
  let today = new Date();
  console.log(today)
  if(today.toDateString() === date.toDateString()) {
    return true;
  } else {
    return false;
  }
}
