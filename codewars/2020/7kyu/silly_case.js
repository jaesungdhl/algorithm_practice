Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  

function sillycase(silly) {
    let MidPoint = Math.round(silly.length / 2);
    
    return silly.slice(0, MidPoint).toLowerCase() + silly.slice(MidPoint).toUpperCase();
  }

  function sillycase(silly) {
    var c = Math.round(silly.length / 2);
    return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
  }