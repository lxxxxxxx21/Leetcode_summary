// 题目来源：https://leetcode-cn.com/problems/product-of-array-except-self/
// 该解法思路是：除去这个数之外的数之积 = 这个数左边的积 * 这个数右边的积
// 简单来说就是 假设L[i]是nums[i]左边的数之积，R[i]是nums[i]右边的数之积
// ans[i] = L[i] * R[i]
// 分别用三个for循环计算L，R，ans
// O(3n) = O(n)

var productExceptSelf = function(nums) {
    var ans = [];
    var n = nums.length;
    var L = [];
    var R = [];
    L[0] = 1;
    R[n-1] = 1;

    for(var i = 1; i < n; i++) {
        L[i] = L[i-1] * nums[i-1];
    }

    for(var i = n-2; i >= 0; i--) {
        R[i] = R[i+1] * nums[i+1];
    }

    for(var i = 0; i < n; i++) {
        ans[i] = L[i] * R[i];
    }

    return ans;
};