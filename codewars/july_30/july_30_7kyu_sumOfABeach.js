Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0

function sumOfABeach(beach) {
    let regex = /water|sand|fish|sun/gi;
    return !beach.match(regex) ? 0 : beach.match(regex).length;
   }

   const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length