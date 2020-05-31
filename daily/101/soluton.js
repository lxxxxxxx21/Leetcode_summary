// 题目来源：https://leetcode-cn.com/problems/symmetric-tree/

var isSymmetric = function(root) {
    var stack = [];
    if(root === null) return true;
    if(root.left === null && root.right === null) return true;

    let left = null;
    let right = null;
    stack.push(root.right);
    stack.push(root.left);
    while(stack.length) {
        left = stack.pop();
        right = stack.pop();
        if(left === null || right === null || left.val !== right.val) {
            console.log(1);
            return false;
        }

        if((left.left !== null && right.right !== null) || (left.left === null && right.right === null)) {
            if(left.left !== null) { 
                stack.push(right.right);
                stack.push(left.left);
            }
        } else {
            console.log(2);
            return false;
        }

        if((left.right !== null && right.left !== null) || (left.right === null && right.left === null)) {
            if(left.right !== null) {
                stack.push(right.left);
                stack.push(left.right);
            }
        } else {
            console.log(3);
            return false;
        }
    }

    return true;
};