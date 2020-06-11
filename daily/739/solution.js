// 题目来源：https://leetcode-cn.com/problems/daily-temperatures/

var dailyTemperatures = function(T) {
    var n = T.length;

    var ans = new Array(n).fill(0);
    var stack = [];
    var top = -1;
    for(var i = 0; i < n; i++) {
        var t = T[i];
        while(stack.length > 0 && T[stack[top]] < t) {
            ans[stack[top]] = i - stack[top];
            stack.pop();
            top--;
        }
        stack.push(i);
        top++;
    }

    return ans;
};