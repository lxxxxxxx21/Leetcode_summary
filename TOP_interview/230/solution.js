// 题目来源：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

var ans = null;

var inorder = function(node) {
    if(node.left) inorder(node.left);
    ans.push(node.val);
    if(node.right) inorder(node.right);
}

var kthSmallest = function(root, k) {
    ans = [];
    inorder(root);

    return ans[k-1];
};