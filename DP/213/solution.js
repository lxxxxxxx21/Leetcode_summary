// 题目来源：https://leetcode-cn.com/problems/house-robber-ii/

var helper = function(nums) {
    var n = nums.length;
    var ans = Number.MIN_SAFE_INTEGER;
    var dp = [];

    for(var i = 0; i < n; i++) {
        if(i - 2 >= 0 && i - 3 === -1) dp[i] = dp[i-2] + nums[i];
        else if(i - 3 >= 0) dp[i] = Math.max(dp[i-2], dp[i-3]) + nums[i];
        else dp[i] = nums[i];

        ans = Math.max(dp[i], ans);
    }

    return ans;
}

var rob = function(nums) {
    var n = nums.length;
    var ans = Number.MIN_SAFE_INTEGER;
    if(n === 0) return 0;
    if(n <= 3) {
        for(var i = 0; i < n; i++) {
            ans = Math.max(ans, nums[i]);
        }

        return ans;
    }

    var nums1 = nums.slice();
    nums1.pop();
    var nums2 = nums.slice();
    nums2.shift();

    ans = Math.max(ans, helper(nums1));
    ans = Math.max(ans, helper(nums2));
    
    return ans;
};