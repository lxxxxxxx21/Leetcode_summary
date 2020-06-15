class Solution {
public:
    bool isPalindrome(int x) {
        string xs = to_string(x);
        int l = xs.length();
        int n =  ceil(l / 2);
        for(int i = 0; i < l; ++i){
            if(xs[i] != xs[l-i-1]) return false;
        }
        return true;    
    }
};