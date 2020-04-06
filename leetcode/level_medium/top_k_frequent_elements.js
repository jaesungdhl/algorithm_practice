347. Top K Frequent Elements
Medium

2486

172

Add to List

Share
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
Accepted
327.7K
Submissions
553.5K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let elemCount = {};
    let freqArr = [];
    for(let num of nums) {
        if(!elemCount[num]) elemCount[num] = 1;
        else elemCount[num]++;
    }
    let countEntries = Object.entries(elemCount);
    countEntries.sort((a,b) => b[1] - a[1]);
    for(let i = 0; i < k; i++) {
        freqArr.push(Number(countEntries[i][0]));
    }
    return freqArr;
};