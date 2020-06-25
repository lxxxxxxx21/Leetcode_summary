var wordBreak = function(s, wordDict) {
    var n = s.length;
    var dp = new Array(n+1).fill(false);
    dp[0] = true;

    for(var i = 1; i <= n; i++) {
        for(var j = 0; j < i ; j++) {
            var str = s.slice(j, i);
            if(dp[j] && wordDict.indexOf(str) !== -1) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};