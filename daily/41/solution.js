var firstMissingPositive = function(nums) {
    var n = nums.length;

    for(var i = 0; i < n; i++) {
        if(nums[[i]] <= 0) nums[i] = n+1;
    } 

    for(var i = 0;i < n; i++) {
        var num = Math.abs(nums[i]);

        if(num <= n) {
            nums[num-1] = -Math.abs(nums[num-1]);
        }
    }

    for(var i = 0; i < n; i++) {
        if(nums[i] > 0) return i+1;
    }

    return n+1;
};