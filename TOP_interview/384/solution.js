/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.init = nums;
    this.cur = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.init;
};
 
/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var n = this.cur.length;

    for(var i = 0; i < n; i++) {
        var index = Math.floor(Math.random()*((n-1) - i + 1 ) + i);
        var tmp = this.cur[index];
        this.cur[index] = this.cur[i];
        this.cur[i] = tmp;
    }

    return this.cur;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */