367. Valid Perfect Square
Easy

627

137

Add to List

Share
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return Number.isInteger(num ** 0.5);
};