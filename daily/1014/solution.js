// 题目来源：https://leetcode-cn.com/problems/best-sightseeing-pair/

var maxScoreSightseeingPair = function(A) {
    const n = A.length;

    if(n === 0 || n === 1) return 0;
    if(n === 2) return A[0] + A[1] - 1;

    let stk = [];
    stk[0] = {value : A[0], i: 0};
    let top = 0;

    let ans = Number.MIN_SAFE_INTEGER;
    for(let j = 1; j < n; j++) {
        let score = A[j] + stk[top].value - (j - stk[top].i);

        if((A[j] + j) > (stk[top].value + stk[top].i)) {
            stk.push({value: A[j], i: j});
            top++;
        }

        ans = Math.max(ans, score);
    }

    return ans;
};