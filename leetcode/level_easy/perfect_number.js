507. Perfect Number
Easy

217

560

Add to List

Share
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 1) return false;
    let divisors = [];
    for(let i = num - 1; i >= 1; i--) {
        if(Number.isInteger(num / i)) divisors.push(i);
    }
    return num == divisors.reduce((a,n) => a += n)
};