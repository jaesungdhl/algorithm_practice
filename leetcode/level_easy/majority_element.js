169. Majority Element
Easy

2560

206

Add to List

Share
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
Accepted
521.8K
Submissions
929.9K

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let elemCounter = {};
    for(let i = 0; i < nums.length; i++) {
        if(!elemCounter[nums[i]]) elemCounter[nums[i]] = 1;
        else elemCounter[nums[i]]++;
    }
    return Object.entries(elemCounter).sort((a,b) => b[1] - a[1])[0][0];
};