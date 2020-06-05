var canCompleteCircuit = function(gas, cost) {
    var n = gas.length;

    var diffs = [];
    for(var i = 0; i < n; i++) {
        var diff = gas[i] - cost[i];
        diffs.push(diff);
    }

    for(var i = 0; i < n; i++) {
        var diff = diffs[i];
        if(diff < 0) continue;

        var index = (i+1) % n;
        var left = diff;
        while(left >= 0) {
            if(index === i) return index;
            left += diffs[index];
            index = (index+1) % n;
        }
    }

    return -1;
};