// 题目来源：https://leetcode-cn.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    var hashMap = new Map();
    var n = nums.length;
    for(var i = 0; i < n; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
    }

    console.log('hashmap', hashMap);
    
    var tmp = [];
    for(let [key, value] of hashMap) {
        if(tmp[value] === undefined) {
            tmp[value] = [];
        }

        tmp[value].push(key);
    }

    console.log('tmp', tmp);

    var ans = []
    for(var i = tmp.length - 1; i >= 0 && ans.length < k; i--) {
        if(tmp[i] === undefined) continue;;
        ans = ans.concat(tmp[i]);
    }

    return ans;
};