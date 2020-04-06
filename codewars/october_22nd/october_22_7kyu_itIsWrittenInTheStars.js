Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

Test info: 100 random tests (dates range from January 1st 1940 until now)

function starSign(date) {
    switch(date.getMonth() + 1){
      case 1:
        if(date.getDate() <= 20) return "Capricorn";
        else return "Aquarius";
        break;
      case 2:
        if(date.getDate() <= 19) return "Aquarius";
        else return "Pisces";
        break;
      case 3:
        if(date.getDate() <= 20) return "Pisces";
        else return "Aries";
        break;
      case 4:
        if(date.getDate() <= 20) return "Aries";
        else return "Taurus";
        break;
      case 5:
        if(date.getDate() <= 21) return "Taurus";
        else return "Gemini";
        break;
      case 6:
        if(date.getDate() <= 21) return "Gemini";
        else return "Cancer";
        break;
      case 7:
        if(date.getDate() <= 22) return "Cancer";
        else return "Leo";
        break;
      case 8:
        if(date.getDate() <= 23) return "Leo";
        else return "Virgo";
        break;
      case 9:
        if(date.getDate() <= 23) return "Virgo";
        else return "Libra";
        break;
      case 10:
        if(date.getDate() <= 23) return "Libra";
        else return "Scorpio";
        break;
      case 11:
        if(date.getDate() <= 22) return "Scorpio";
        else return "Sagittarius";
        break;
      default:
        if(date.getDate() <= 22) return "Sagittarius";
        else return "Capricorn";
        break;
      }
  }

  function starSign(date) {
    let x = date.getMonth() * 100 + date.getDate()
    
    if (x <= 20) return 'Capricorn'
    if (x <= 119) return 'Aquarius'
    if (x <= 220) return 'Pisces'
    if (x <= 320) return 'Aries'
    if (x <= 421) return 'Taurus'
    if (x <= 521) return 'Gemini'
    if (x <= 622) return 'Cancer'
    if (x <= 723) return 'Leo'
    if (x <= 823) return 'Virgo'
    if (x <= 923) return 'Libra'
    if (x <= 1022) return 'Scorpio'
    if (x <= 1121) return 'Sagittarius'
    return 'Capricorn'
    
  }