268. Missing Number
Easy

1426

1819

Add to List

Share
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

Accepted
393.6K
Submissions
779.9K

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++) {
        if(nums.indexOf(i) == -1) return i;
    }
};