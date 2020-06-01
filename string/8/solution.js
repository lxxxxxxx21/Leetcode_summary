// 题目来源：https://leetcode-cn.com/problems/string-to-integer-atoi/

// 有限自动机
var Automation = function() {
    // 符号位 1 为正，-1 为负
    this.sign = 1;
    // 储存答案
    this.ans = 0;
    // 初试状态
    this.state = 'start';
    this.stateT = new Map();
    // 状态转移变量
    this.stateT.set('start', ['start', 'signed', 'in_number', 'end']);
    this.stateT.set('signed', ['end', 'end', 'in_number', 'end']);
    this.stateT.set('in_number', ['end', 'end', 'in_number', 'end']);
    this.stateT.set('end', ['end', 'ned', 'end', 'end']);
}

// 解析每次输入的字符
Automation.prototype.get_col = function(ch) {
    var chcode = new String(ch).charCodeAt(0);
    if(chcode === 32) return 0;
    else if(chcode === 43 || chcode === 45) return 1;
    else if(chcode >= 48 && chcode <= 57) return 2;
    else return 3;
}

// 每一个字符输入的流程
Automation.prototype.get = function(ch) {
    var arr = this.stateT.get(this.state);
    this.state = arr[this.get_col(ch)];

    if(this.state === 'in_number') {
        this.ans = this.ans * 10 + new Number(ch);
        // 这里做了一个防止溢出的处理
        this.ans = this.sign === 1 ? Math.min(this.ans, 2147483647) : Math.min(this.ans, 2147483648);
    } else if(this.state === 'signed') {
        this.sign = ch === '+' ? 1 : -1;
    }
}


var myAtoi = function(str) {
    var n = str.length;
    var automation = new Automation();
    for(var i = 0; i < n; i++) {
        automation.get(str.charAt(i));
    }
  
    // 由最终的符号位来判断结果为正或者负
    return automation.sign * automation.ans;
};