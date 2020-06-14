var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    var len = nums.length;
    if(len < 3) {
        return [];
    }
    
    if(nums[len - 1] === 0 && nums[len - 2] === 0 && nums[len-3] === 0) {
        return [[0,0,0]];
    }
    
    if(nums[0] < 0 && nums[len - 1] <=0) {
        return [];
    }
   
    
    var results = [];
    var record = new Map();
    for(var i = 0; i < nums.length - 2; i++) {
        var a = nums[i];
        var begin = i + 1;
        var end = nums.length - 1;
        while(begin < end) {
            var b = nums[begin];
            var c = nums[end];
            
            var sum = a + b + c;
            if(sum === 0) {
                var s = a + ',' + b + ',' + c;
                record.set(s, 1);
                end--;
            } else if(sum > 0) {
                end--;
            } else {
                begin++;
            }
        }
    }
    
    for(let [index, value] of record) {
        results.push(index.split(','));
    }
    
    
    return results;
};