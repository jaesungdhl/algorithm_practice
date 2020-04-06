258. Add Digits
Easy

621

983

Add to List

Share
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?

Accepted
274,333
Submissions
491,545

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let digitsSum = num.toString().split("").reduce((a,c) => a += Number(c), 0);
    return digitsSum < 10 ? digitsSum : addDigits(digitsSum);
};