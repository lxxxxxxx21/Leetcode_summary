// 题目来源：https://leetcode-cn.com/problems/qiu-12n-lcof/

var sumNums = function(n) {
    var ans = 0;
    var x = n;
    var y = n+1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;
    
    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1; 

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;
    
    (y & 1) && (ans += x);
    x = x << 1;
    y = y >> 1;

    return ans >> 1;                
};