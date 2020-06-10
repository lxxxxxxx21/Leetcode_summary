// 解法同 15题

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    var ans = 0;
    var diff = Number.MAX_SAFE_INTEGER;
    
    for(var i = 0; i < nums.length - 2; i++) {
        var a = nums[i];
        
        var begin = i + 1;
        var end = nums.length - 1;
        while(begin < end) {
            var b = nums[begin];
            var c = nums[end];
            
            var sum = a + b + c;
            var distance = Math.abs(target - sum);
            if(distance < diff) {
                ans = sum;
                diff = distance;
            }
            
            if(target > sum) {
                begin++;
            } else {
                end--;
            }
        }
    }
    
    return ans;
};