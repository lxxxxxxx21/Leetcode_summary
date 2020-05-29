// 来源：https://leetcode-cn.com/problems/house-robber/
// dp解法

var rob = function(nums) {
    var n = nums.length;
    var dp = new Array(n);

    var ans = Number.MIN_SAFE_INTEGER;
    if(n === 0) return 0;
    if(n === 1) return nums[0];

    for(var i = 0; i < n; i++) {
        if(i - 2 >= 0 && i - 3 === -1) dp[i] = dp[i-2] + nums[i];
        else if(i - 3 >= 0) dp[i] = Math.max(dp[i-2], dp[i-3]) + nums[i];
        else dp[i] = nums[i];

        ans = Math.max(dp[i], ans);
    }

    return ans;
};