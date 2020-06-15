//题目来源： https://leetcode-cn.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    var n = strs.length;
    if(n === 0) return "";
    if(n === 1) return strs[0];


    var ans = strs[0];
    for(var i = 1; i < n; i++) {
        var str = strs[i];
        var j = 0;
        var index = 0;
        while(j < ans.length && j < str.length) {
            if(ans[j] !== str[j++]) break;
            else index++;

        }
        ans = ans.substring(0, index);
    }

    return ans;
};