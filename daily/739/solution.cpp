class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        int n = T.size();
        vector<int> ans(n);
        stack<int> s;
        for(int i = 0; i < n; ++i){
            while(!s.empty() && T[i] > T[s.top()]){
                int preIndex = s.top();
                ans[preIndex] = i - preIndex;
                s.pop();
            }
            s.push(i);
        }
        return ans;
    }
};