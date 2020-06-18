var recoverFromPreorder = function(S) {
    var stk = [];
    var top = -1;
    var pos = 0;
    while(pos < S.length) {
        var level = 0;
        while(S.charAt(pos) === '-') {
            level++;
            pos++;
        }

        var num = '';
        while(pos < S.length && S.charAt(pos) !== '-') {
            num += S.charAt(pos);
            pos++;
        }

        var node = new TreeNode(Number(num));
        if(stk.length === level) {
            if(stk.length !== 0) stk[top].left = node;
        } else {
            while(stk.length !== level) {
                stk.pop();
                top--;
            }
            stk[top].right = node;
        }
        stk.push(node);
        top++;
    }