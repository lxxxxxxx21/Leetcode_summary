class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        if(candies.empty()) return {};

        int maxVal = 0;
        for(int i = 0; i < candies.size(); ++i){
            maxVal = max(candies[i], maxVal);
        }

        vector<bool> ans;
        for(int i = 0; i < candies.size(); ++i){
            if(maxVal-candies[i] <= extraCandies){
                ans.push_back(true);
            }else ans.push_back(false);
        }
        return ans;
    }
};