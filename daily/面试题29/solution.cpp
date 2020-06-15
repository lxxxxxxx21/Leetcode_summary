class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        if(matrix.empty()) return {};
        
        int l = 0, r = matrix[0].size() - 1;
        int t = 0, b = matrix.size() - 1;
        int x = -1;
        vector<int> ans((r + 1) * (b + 1), 0);
        while(true){
            for(int i = l; i <= r; ++i) ans[++x] = matrix[t][i];
            if(++t > b) break;
            for(int i = t; i <= b; ++i) ans[++x] = matrix[i][r];
            if(--r < l) break;
            for(int i = r; i >= l; --i) ans[++x] = matrix[b][i];
            if(--b < t) break;
            for(int i = b; i >= t; --i) ans[++x] = matrix[i][l]; 
            if(++l > r) break;

        }
        return ans;
    }
};