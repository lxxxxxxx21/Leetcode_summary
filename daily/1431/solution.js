// 题目来源：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
var kidsWithCandies = function(candies, extraCandies) {
    var n = candies.length;
    var ans = [];
    var max = 0;
    for(var i = 0; i < n; i++) {
        max = Math.max(max, candies[i]);
    }

    for(var i = 0; i < n; i++) {
        if(candies[i] + extraCandies >= max) ans.push(true);
        else ans.push(false);
    }

    return ans;
};