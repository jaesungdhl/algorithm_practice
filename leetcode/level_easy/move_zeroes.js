283. Move Zeroes
Easy

3061

105

Add to List

Share
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Accepted
637.1K
Submissions
1.1M

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    let filteredNums = nums.filter(elem => {
        if(elem !== 0) {
            return true;
        } else {
            zeroCount++;
            return false;
        }
    });
    filteredNums.push(...new Array(zeroCount).fill(0));
    nums.splice(0, nums.length, ...filteredNums);
};