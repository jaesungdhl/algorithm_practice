Fix this function so that it correctly outputs a list of the next five days (starting after the input date). Each date should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way.

var nextFiveDays = function(date){
    let dayInMilliseconds = 86400000, 
        dateArr = [],
        currentDayInMilliseconds = date.valueOf();
    
    for(let i = 0; i < 5; i++) {
      currentDayInMilliseconds += dayInMilliseconds;
      dateArr.push(new Date(currentDayInMilliseconds).toLocaleDateString("en-US"));
    }
      
    return dateArr.join(', ');
  }

  var nextFiveDays = function(date){
    var dates = [];
    var nextDay = new Date(date);
    
    for (var i = 0; i < 5; i++) {
      nextDay.setDate(nextDay.getDate() + 1);
      dates.push((nextDay.getMonth() + 1) + '/' + nextDay.getDate()+ '/' + nextDay.getFullYear());
    }
    
    return dates.join(', ');
}