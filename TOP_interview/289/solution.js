// 本题链接：https://leetcode-cn.com/problems/game-of-life/

var gameOfLife = function(board) {
    var m = board.length;
    var n = board[0].length;

    // 记录方向
    var dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    var dy = [-1, -1, -1, 0, 0, 1, 1, 1];

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            var status = board[i][j];
            var liveN = 0;
            // 记录周围活细胞的数量
            for(var k = 0; k < 8; k++) {
                var nx = i + dx[k];
                var ny = j + dy[k];
                if(nx >= 0 && nx < m && ny >= 0 && ny < n) liveN += (board[nx][ny] & 1);
            }

            // 如果当前细胞为活细胞
            if(status === 1) {
                // 2(十进制) = 10(二进制), 这里我们增加一个bit位来存储周期结束后仍是活的细胞
                // 1x >> 1 = 1, 0x >> 1 = 0, 以上
                if(liveN === 2 || liveN === 3) board[i][j] |= 2;
            } else {
                // 如果当前细胞为死细胞
                if(liveN === 3) board[i][j] |= 2;
            }
        }
    }

    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }

    return board;
};