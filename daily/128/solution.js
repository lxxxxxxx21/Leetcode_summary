var longestConsecutive = function(nums) {
    var hashMap = new Map();
    for(let num of nums) {
        hashMap.set(num, 1);
    }

    var ans = 0;
    for(let [key, value] of hashMap) {
        if(hashMap.get(key-1)) continue;
        else {
            var curIndex = key+1;
            var curLength = 1;
            while(hashMap.get(curIndex)) {
                curLength++;
                curIndex++;
            }

            ans = Math.max(ans, curLength);
        }
    }

    return ans;
};