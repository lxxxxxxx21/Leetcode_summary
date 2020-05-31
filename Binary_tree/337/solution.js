// 题目来源：https://leetcode-cn.com/problems/house-robber-iii/

var dfs = function(root, last) {
    if(root === null) return 0;
    var ans = 0;
    if(last === 1) {
        ans += dfs(root.left, -1) + dfs(root.right, -1);
    } else {
        ans +=  Math.max((root.val + dfs(root.left, 1) + dfs(root.right, 1)), dfs(root.left, -1) + dfs(root.right, -1));
    }

    return ans;
}

var rob = function(root) {
    var ans = 0;
    if(root === null) return 0;
    if(root.left === null & root.right === null) return root.val;
    
    ans += Math.max((root.val + dfs(root.left, 1) + dfs(root.right, 1)), dfs(root.left, -1) + dfs(root.right, -1));

    return ans;
};