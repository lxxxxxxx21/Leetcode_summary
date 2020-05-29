// 题目来源：https://leetcode-cn.com/problems/palindrome-partitioning/
var ans = null;

var partitionHelper = function(s, start, dp, tmp) {
    if(start === s.length) {
        ans.push(tmp);
    }

    for(var i = start; i < s.length; i++) {
        if(dp[start][i]) {
            var left = s.substring(start, i+1);
            tmp.push(left);
            partitionHelper(s, i+1, dp, tmp.slice());
            tmp.pop();
        }
    }
}

var partition = function(s) {
    var n = s.length;
    var dp = new Array(n);
    for(var i = 0; i < n; i++) {
        dp[i] = [];
    }

    for (var len = 1; len <= n; len++) {
        for (var i = 0; i <= n - len; i++) {
            dp[i][i + len - 1] = s.charAt(i) == s.charAt(i + len - 1) && (len < 3 || dp[i + 1][i + len - 2]);
        }
    }

    ans = [];
    partitionHelper(s, 0, dp, new Array());
    return ans;
};