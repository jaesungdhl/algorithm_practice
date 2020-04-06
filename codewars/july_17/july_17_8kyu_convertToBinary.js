Task Overview
Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */

function toBinary(n){
    return Number(n.toString(2));
  }

  function toBinary(n){
    var binary = ""
    var i = 2
    
    if (n==0){
    binary = 0
    }
    
    while(n > 0){
      if(n % i == 0){
        binary = "0" + binary 
      }
      else{
        binary = "1" + binary 
        n = n - (i/2)
      }
      i = i * 2
    }
    return parseInt(binary);
  }