// 题目来源：https://leetcode-cn.com/problems/4sum-ii/

var fourSumCount = function(A, B, C, D) {
    var n = A.length;
    var hashMap = new Map();

    for(var a of A) {
        for(var b of B) {
            hashMap.set(a+b, (hashMap.get(a+b) || 0) + 1);
        }
    }    

    var ans = 0;
    for(var c of C) {
        for(var d of D) {
            var cur = c + d;
            if(hashMap.get(-cur)) {
                ans += hashMap.get(-cur);
            }
        }
    }
 
    return ans;
};