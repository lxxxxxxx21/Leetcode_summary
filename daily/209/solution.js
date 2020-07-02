var minSubArrayLen = function(s, nums) {
    var n = nums.length;
    if(n === 0) return 0;


    var ans = Number.MAX_SAFE_INTEGER;

    var climb = [0];
    for(var i = 0; i < n; i++) {
        climb[i+1] = climb[i] + nums[i];
    }

    console.log(climb);

    for(var i = 0; i < n+1; i++) {
        var sum = climb[i];

        var begin = i;
        var end = n+1;
        var base = sum;
        while(begin < end) {
            var mid = (begin + end) >> 1;
            if(climb[mid] - base >= s) end = mid;
            else begin = mid+1;
        }

        if(climb[begin] - sum >= s) ans = Math.min(ans, begin - i);
    }

    return ans === Number.MAX_SAFE_INTEGER? 0 : ans;
};