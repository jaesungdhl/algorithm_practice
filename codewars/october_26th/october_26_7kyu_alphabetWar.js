Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight)
{
  let leftsideLetters = /[wpbs]/;
  let rightsideLetters = /[mqdz]/i;
  let leftsideScore = 0;
  let rightsideScore = 0;
  let fightLetters = fight.toLowerCase();
  for(let i = 0 ; i < fight.length ; i++) {
    if(leftsideLetters.test(fightLetters[i])) {
      switch(fightLetters[i]) {
        case "w": 
          leftsideScore += 4;
          break;
        case "p":
          leftsideScore += 3;
          break;
        case "b":
          leftsideScore += 2;
          break;
        default:
          leftsideScore++;
          break;
        }
    } else if(rightsideLetters.test(fightLetters[i])) {
        switch(fightLetters[i]) {
          case "m": 
            rightsideScore += 4;
            break;
          case "q":
            rightsideScore += 3;
            break;
          case "d":
            rightsideScore += 2;
            break;
          default:
            rightsideScore++;
            break;
        }
    } else continue;
  }
  return (
    leftsideScore > rightsideScore ? "Left side wins!" :
    leftsideScore < rightsideScore ? "Right side wins!" :
    "Let's fight again!"
  );
}

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}