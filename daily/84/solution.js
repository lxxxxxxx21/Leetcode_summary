// 题目来源：https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

var largestRectangleArea = function(heights) {
    var n = heights.length;
    var left = new Array(n);
    var right = new Array(n);
    var stack = [];
    var top = -1
    for(var i = 0; i < n; i++) {
        while(top !== -1 && heights[stack[top]] >= heights[i]) {
            stack.pop();
            top--;
        }
        if(top === -1) left[i] = -1;
        else left[i] = stack[top];
        stack.push(i);
        top++;
    }

    stack = [];
    top = -1;
    for(var i = n-1; i >= 0; i--) {
        while(top !== -1 && heights[stack[top]] >= heights[i]) {
            stack.pop();
            top--;
        }
        if(top === -1) right[i] = n;
        else right[i] = stack[top];
        stack.push(i);
        top++;
    }

    var ans = 0;
    console.log(left, right);
    for(var i = 0; i < n; i++) ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));

    return ans;
};