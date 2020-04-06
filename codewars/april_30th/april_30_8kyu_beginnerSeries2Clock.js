Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

#####Example:

past(0, 1, 1) == 61000
Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

function past(h, m, s){
    let hourSeconds = h * 3.6e6;
    let minuteSeconds = m * 60000;
    let seconds = s * 1000;
    return hourSeconds + minuteSeconds + seconds;
}

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }