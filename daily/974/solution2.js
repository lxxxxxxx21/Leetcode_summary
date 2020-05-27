var subarraysDivByK = function(A, K) {
    var n = A.length;
    var ans = 0;
    var preSum = [];
    var cur = 0;
    for(var i = 0; i < n; i++) {
        cur += A[i];
        preSum[i] = cur;
    }

    var map = new Map();
    map.set(0, 1);

    for(var i = 0; i < n; i++) {
        var mod = (preSum[i] % K + K) % K;
        
        ans += map.get(mod) || 0;
        map.set(mod, (map.get(mod) || 0) + 1);
    }

    return ans;
};