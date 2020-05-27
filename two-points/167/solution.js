// 本题链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
// 本题思路来源y神,b站链接：https://space.bilibili.com/7836741

// created by kevinlee21, 2020/5/26

var twoSum = function(nums, target) {
  var n = nums.lengthl
  for(var j = 0, i = n-1; j < n; j++) {
    while(i-1 > j && nums[i-1] + nums[j] >= target) i--;
    if(nums[i] + nums[j] === target) return [j+1, i+1];
  }
}
