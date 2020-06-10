var threeSum = function(nums) {
    // 先将数组排序
    nums.sort((a, b) => a - b);
    var len = nums.length;

    // 特殊情况：1.数组长度不足3；2.最小的三个数都是0；3.数组所有数都小于0
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
        // 每次固定一个数，记为a
        var a = nums[i];
        var begin = i + 1;
        var end = nums.length - 1;
        // 从头尾开始用双指针遍历
        while(begin < end) {
            var b = nums[begin];
            var c = nums[end];
            
            var sum = a + b + c;
            // 如果a+b+c == 0 找到了和为0的三个数
            if(sum === 0) {
                var s = a + ',' + b + ',' + c;
                record.set(s, 1);
                end--;
            // 如果和大于0, 将end右移，即缩小最大的数
            } else if(sum > 0) {
                end--;
            // 如果和小于0，将begin左移，即扩大最小的数
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