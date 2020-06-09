// 题目来源：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/submissions/

var ans = null;
var helper = function(num, start) {
    if(start >= num.length) {
        ans++;
        return ;
    }

    helper(num, start+1);
    var sub = num.substr(start, 2);
    if(sub.length === 2 && (sub >= '10' && sub <= '25')) helper(num, start+2);
}

var translateNum = function(num) {
    ans = 0;
    helper(num + "", 0);

    return ans;
};