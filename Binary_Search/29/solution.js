// 题目来源：https://leetcode-cn.com/problems/divide-two-integers/

var div = function(a , b) {
    if(a < b) return 0;

    var count = 1;
    var nb = b;
    while((nb + nb) <= a) {
        count += count;
        nb += nb;
    }

    return count + div(a - nb, b);
}

var divide = function(dividend, divisor) {
    if(dividend === 0) return 0;
    if(divisor === 1) return dividend;
    if(divisor === -1) {
        if(dividend > -2147483648) return -dividend;
        else return 2147483647;
    }

    var a = dividend;
    var b = divisor;

    var sign = 1;
    if((a > 0 && b < 0) || (a < 0 && b > 0)) sign = -1;

    a = a > 0? a : -a;
    b = b > 0? b : -b;

    var ans = div(a, b);
    if(sign > 0) return ans > 2147483647? 2147483647 : ans;
    return -ans;
};