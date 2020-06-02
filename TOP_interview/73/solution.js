// 题目来源：https://leetcode-cn.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    var m = matrix.length;
    if(m === 0) return ;
    var n =matrix[0].length;

    var rows = new Array(m).fill(1);
    var cows = new Array(n).fill(1);

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                rows[i] = 0;
                cows[j] = 0;
            }
        }
    }

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(!rows[i] || !cows[j]) matrix[i][j] = 0;
        }
    }
    
};