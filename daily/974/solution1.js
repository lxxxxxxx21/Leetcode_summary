var subarraysDivByK = function(A, K) {
    var n = A.length;
    var sum = [];
    var cur = 0;
    var ans = 0;
    for(var i = 0; i < n; i++) {
        cur += A[i];
        sum[i] = cur;

        if(cur % K === 0) ans++;
    }

    for(var i = 0; i < n-1; i++) {
        for(var j = i+1; j < n; j++) {
            cur = sum[j] - sum[i];
            if(cur % K === 0) ans++;
        }
    }

    return ans;
};