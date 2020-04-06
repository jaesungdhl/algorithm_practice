448. Find All Numbers Disappeared in an Array
Easy

2348

216

Add to List

Share
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
Accepted
216.6K
Submissions
392.2K

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let missingNumbers = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(i + 1) == -1) missingNumbers.push(i + 1);
    }
    return missingNumbers;
};