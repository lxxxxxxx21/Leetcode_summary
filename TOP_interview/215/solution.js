// 题目来源：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
var shift = function(arr, end) {
    for(var i = end; i >= 0; i--) {
        var j = i;
        while(((j-1) >> 1) >= 0) {
            var k = (j - 1) >> 1;
            if(arr[k] > arr[j]) {
                var tmp = arr[k];
                arr[k] = arr[j];
                arr[j] = tmp;
            }

            j = k;
        }
    }

    return arr;
}

var findKthLargest = function(nums, k) {
    var nums = shift(nums, nums.length-1);

    var end = nums.length - 1;
    for(var i = 0; i < nums.length; i++) {
        var tmp = nums[end];
        nums[end] = nums[0];
        nums[0] = tmp;
        var nums = shift(nums, end-1);
        end--;
    }

    return nums[k-1];
};