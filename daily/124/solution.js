var ans = null;

var helper = function(root) {
    if(root === null) return 0;

    var v_left = Math.max(helper(root.left), 0);
    var v_right = Math.max(helper(root.right), 0);

    var v_cur = root.val + v_left + v_right;
    ans = Math.max(ans, v_cur);
    return root.val + Math.max(v_left, v_right);
}

var maxPathSum = function(root) {
    ans = Number.MIN_SAFE_INTEGER;
    helper(root);

    return ans;
};