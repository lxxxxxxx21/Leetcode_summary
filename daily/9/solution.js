// 题目来源：https://leetcode-cn.com/problems/palindrome-number/

var isPalindrome = function(x) {
    var flag = x >= 0? 1 : -1;
    if(flag < 0) return false;
    x *= flag;

    var nums = [];
    while(x) {
        nums.push(x % 10);
        x = Math.floor(x / 10);       
    } 

    var n = nums.length;
    for(var left = 0, right = n-1; left < right; left++, right--) {
        if(nums[left] !== nums[right]) return false;
    }

    return true;     
};  