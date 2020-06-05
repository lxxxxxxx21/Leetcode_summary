// 题目来源：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

var ans = null;
var alphMap = new Map();
alphMap.set(2, ['a', 'b', 'c']);
alphMap.set(3, ['d', 'e', 'f']);
alphMap.set(4, ['g', 'h', 'i']);
alphMap.set(5, ['j', 'k', 'l']);
alphMap.set(6, ['m', 'n', 'o']);
alphMap.set(7, ['p', 'q', 'r', 's']);
alphMap.set(8, ['t', 'u', 'v']);
alphMap.set(9, ['w', 'x', 'y', 'z']);

var helper = function(digits, index, max, tmp) {
    if(index === max) {
        ans.push(tmp.join(""));
        return ;
    }

    var num = digits.charAt(index);
    var alphs = alphMap.get(Number(num));
    for(var i = 0; i < alphs.length; i++) {
        var ch = alphs[i];
        tmp.push(ch);
        helper(digits, index+1, max, tmp.slice());
        tmp.pop();
    }
}


var letterCombinations = function(digits) {
    var n = digits.length;
    if(n === 0) return [];

    ans = [];
    helper(digits, 0, n, []);

    return ans;
};