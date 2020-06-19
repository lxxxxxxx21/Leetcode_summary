var nextPermutation = function(nums) {
    var n = nums.length;

    if(n <= 1) return nums;
    if(n === 2) {
        [nums[0], nums[1]] = [nums[1], nums[0]];
        return nums;
    }

    var i = 1;
    var flag = 'order';
    while(nums[i] >= nums[i-1] && i < n) i++;
    if(nums[i] < nums[i-1]) flag = 'reverse';
    
    var j = i+1;
    while(nums[j] <= nums[j-1] && j < n) j++;

    if(j > i+1) i = j;

    console.log(i, flag);

    if(i === n && flag === 'reverse') {
        var begin = 0;
        var end = n-1;
        while(begin < end) {
            [nums[begin], nums[end]] = [nums[end], nums[begin]];
            begin++;
            end--;
        }
    } else if(i === n && flag === 'order') {
        [nums[n-1], nums[n-2]] = [nums[n-2], nums[n-1]];
    } else {
        var first = nums[i];
        while(i > 0) {
            nums[i] = nums[i-1];
            i--;
        }
        nums[0] = first;
    }
    return nums;
};