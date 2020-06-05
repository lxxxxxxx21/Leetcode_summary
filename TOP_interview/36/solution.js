var isValidSudoku = function(board) {
    var n = board.length;

    var rows = new Array(9).fill(0);
    var cols = new Array(9).fill(0);
    var ins = new Array(9).fill(0);
    // (x,n) => rows[x] 
    // (n,x) => cols[x]
    // times = 0 (n % 3 === 0, n % 3 === 0) => ins[times++] 

    var index = 0;

    for(var x = 0; x < n; x++) {
        // 每次外循环开始，竖排从0开始    
        for(var y = 0; y < n; y++) {
            var num = board[x][y];            
            if(num === '.') continue;

            // 检查索引到哪个九宫格
            index = (Math.floor(x / 3)) * 3 + Math.floor(y / 3);

            // 检查横排
            if((1 << (num-1)) & rows[x]) {
                console.log('x');
                return false;
            }
            else rows[x] |= (1 << (num-1));
            // 检查竖排
            if((1 << (num-1)) & cols[y]) {
                console.log('y');
                return false;
            }
            else cols[y] |= (1 << (num-1));
            // 检查九宫格
            if((1 << (num-1)) & ins[index]) {
                console.log('in');
                return false;
            }
            else ins[index] |= (1 << (num-1));
        }
    }

    return true;
};