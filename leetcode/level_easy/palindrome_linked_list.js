234. Palindrome Linked List
Easy

2544

329

Add to List

Share
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
    if(head == null) return true;
    let palindromArr = getListArr(head);
    return palindromArr.join("") == palindromArr.reverse().join("");
};

var getListArr = function(list) {
    if(list.next == null) return [list.val];
    let palindromeArr = getListArr(list.next);
    palindromeArr.push(list.val);
    return palindromeArr;
}