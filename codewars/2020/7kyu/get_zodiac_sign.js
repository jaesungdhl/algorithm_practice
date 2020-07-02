Your task is to get Zodiac Sign using input day and month.

For exapmle:

getZodiacSign(1,5) => 'Taurus'
getZodiacSign(10,10) => 'Libra'
Correct answers are (preloaded):

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
P.S. Each argument is correct integer number.

WESTERN ASTROLOGY STAR SIGN DATES

Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20)

const getZodiacSign = (day, month) => {
    if(month === 1) {
      return day >= 20 ? "Aquarius" : "Capricorn";
    }
    
    if(month === 2) {
      return day >= 19 ? "Pisces" : "Aquarius";
    }
    
    if(month === 3) {
      return day >= 21 ? "Aries" : "Pisces";
    }
    
    if(month === 4) {
      return day >= 20 ? "Taurus" : "Aries";
    }
    
    if(month === 5) {
      return day >= 21 ? "Gemini" : "Taurus";
    }
    
    if(month === 6) {
      return day >= 21 ? "Cancer" : "Gemini";
    }
    
    if(month === 7) {
      return day >= 23 ? "Leo" : "Cancer";
    }
    
    if(month === 8) {
      return day >= 23 ? "Virgo" : "Leo";
    }
    
    if(month === 9) {
      return day >= 23 ? "Libra" : "Virgo";
    }
    
    if(month === 10) {
      return day >= 23 ? "Scorpio" : "Libra";
    }
    
    if(month === 11) {
      return day >= 22 ? "Sagittarius" : "Scorpio";
    }
    
    if(month === 12) {
      return day >= 22 ? "Capricorn" : "Sagittarius";
    }
  }

  const getZodiacSign = (day, month) => {
    return signs[day>=[20,20,19,20,21,21,23,23,23,23,22,22][month-1]?month:month-1]||"Capricorn"
  }