// 题目来源：https://leetcode-cn.com/problems/perfect-squares/

var numSquares = function(n) {
    var maxSqrt = Math.floor(Math.sqrt(n, 2));
    var sqrtNums = [];
    for(var i = 1; i <= maxSqrt; i++) {
        sqrtNums.push(i*i);
    }

    console.log(sqrtNums);

    var queue = [n];
    var level = 0;
    while(queue.length !== 0) {
        level += 1;
        var nextQueue = [];
        for(let num of queue) { 
            for(let sqrt of sqrtNums) {
                if(num === sqrt) return level;
                else if(num < sqrt) break;
                else nextQueue.push(num - sqrt);
            }
        }
        queue = nextQueue;
    }

    return level;
};