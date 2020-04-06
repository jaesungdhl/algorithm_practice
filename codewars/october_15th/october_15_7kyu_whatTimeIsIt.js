Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time

var getMilitaryTime = function(input) {
    let ampm = input.slice(-2);
    let time = input.slice(0, input.length - 2).split(":");
    if(ampm === "AM") {
      if(time[0] === "12") time[0] = "00";
    } else {
      if(time[0] === "12") time[0] = "12";
      else time[0] = (12 + Number(time[0])).toString();
    }
    return time.join(":");
  };

  var getMilitaryTime = function(input) {

    var hour = (input.slice(-2) === 'AM' ? 0 : 12)
             + +input.slice(0, 2) % 12;
    
    var time = ('00' + hour).slice(-2) 
             + input.slice(2, -2)
    
    return time;
    
  };