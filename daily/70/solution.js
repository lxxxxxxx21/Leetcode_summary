var climbStairs = function(n) {
    var dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(var i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};