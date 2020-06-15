class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        if(nums.empty()) return {};

        int n = nums.size();
        vector<int>ans(n, 1);
        int prefix = 1, suffix = 1;
        for(int i = 0; i < n; i++){
            ans[i] *= prefix;
            prefix *= nums[i];
            ans[n-i-1] *= suffix;
            suffix *= nums[n-i-1];
        }
        return ans;
    }
};