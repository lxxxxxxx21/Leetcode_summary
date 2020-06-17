//类比一个数组求最大的两数之和，关键点在于写成 (A[i]+i)+(A[j]-j) 的形式

class Solution {
public:
    int maxScoreSightseeingPair(vector<int>& A) {
        int max_value = 0;
        int current = A[0];
        for(int j = 1; j < A.size(); ++j){
            max_value = max(max_value, current + A[j] - j);
            current = max(current, A[j] + j);          
        }
        return max_value;
    }
};