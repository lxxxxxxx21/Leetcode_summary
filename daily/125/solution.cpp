class Solution {
public:
    bool isPalindrome(string s) {
        if(s.empty()) return true;

        string str;
        for(char ch : s)
            if(isalnum(ch)) str += tolower(ch);

        string str_rev(str.rbegin(), str.rend());
        return str == str_rev;        
    }
};