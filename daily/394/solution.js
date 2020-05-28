// 题目来自：https://leetcode-cn.com/problems/decode-string/

var isAlpha = function(code) {
    if((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) return 1;
    else return 0;
}

var isNumber = function(code) {
    if(code >= 48 && code <= 57) return 1;
    else return 0;
}

var decodeString = function(s) {
    var n = s.length;
    var stack  = [];
    var ans = "";

    for(var i = 0; i < n; i++) {
        var ch = s.charAt(i);
        var code = s.charCodeAt(i);

        // 如果当前ch为数字，取出一个数字（这里数字不一定是一位数，要遍历后面是否是二位数以上）
        if(isNumber(code)) {
            var tmp = ch;
            i++;
            while(isNumber(s.charCodeAt(i))) {
                tmp += s.charAt(i++);
            }
            i--;
            stack.push(Number(tmp));
        // 如果当前ch为字母或者为左括号，直接进栈
        } else if(isAlpha(code) || ch === '[') {
            stack.push(ch);
        // 如果ch为右括号
        } else {
            var strs = [];
            var str = '';
            var index = stack.length-1;
            while(stack[index] !== '[') {
                strs.unshift(stack.pop());
                index--;
            }

            for(var j = 0; j < strs.length; j++) {
                str += strs[j];
            }

            // 左括号出栈
            stack.pop();
            var times = stack.pop();
            var nstr = str.repeat(times);
            stack.push(nstr);
        }
    }

    for(var i = 0; i < stack.length; i++) {
        ans += stack[i];
    }

    return ans;
};