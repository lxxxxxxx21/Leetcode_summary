var isPalindrome = function(s) {
    var n = s.length;

    if(n === 0 || n === 1) return true;

    var begin = 0;
    var end = n-1;

    s = s.toLowerCase();
    while(begin < end) {
        while(!(s.charCodeAt(begin) >= 97 && s.charCodeAt(begin) <= 122) &&
              !(s.charCodeAt(begin) >= 48 && s.charCodeAt(begin) <= 57) && begin < n) ++begin;
        while(!(s.charCodeAt(end) >= 97 && s.charCodeAt(end) <= 122) &&
              !(s.charCodeAt(end) >= 48 && s.charCodeAt(end) <= 57) && end >= 0) --end;

        if(s.charAt(begin) !== s.charAt(end)) return false;
        begin++;
        end--;
    }

    return true;
};