class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if(!strs.size()) return "";

        string prefix = strs[0];
        int count = strs.size();
        for(int i = 0; i < count; ++i){
            prefix = func(prefix, strs[i]);
            if(!prefix.size()) break;
        }
        return prefix;
        
    }
    string func(const string& str1, const string& str2){
        int length = min(str1.size(), str2.size());
        int index = 0;
        while(index < length && str1[index] == str2[index]) ++index;
        return str1.substr(0, index);
    }
};