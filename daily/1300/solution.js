// 题目来源：https://leetcode-cn.com/problems/sum-of-mutated-array-closest-to-target/

var findBestValue = function(arr, target) {
    arr.sort((a, b) => {
        return a-b;
    });
    var n = arr.length;
    var prefix = new Array(n+1);
    prefix[0] = 0;

    for(var i = 1; i <= n; i++) {
        prefix[i] = prefix[i-1] + arr[i-1];
    }

    var ans = 0;
    var diff = target;
    for(var t = 1; t <= arr[n-1]; t++) {
        var begin = 0;
        var end = n;
        while(begin < end) {
            var mid = (begin + end) >> 1;
            if(arr[mid] < t) begin = mid+1;
            else end = mid;
        }
        
        ndiff = Math.abs(target - prefix[begin] - t * (n-begin));
        if(ndiff < diff) {
            diff = ndiff;
            ans = t;
        }
    }

    return ans;
};