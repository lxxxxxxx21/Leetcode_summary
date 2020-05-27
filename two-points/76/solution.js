// 本题链接：

var minWindow = function(s, t) {
	var record = new Map();
	var cNum = 0;
	var ans = "";
	var length = Number.MAX_SAFE_INTEGER;

	// 1. 先将子串t中出现的符号种类和数目预先存储
	for(var i = 0; i < t.length; i++) {
		var ch = t.charAt(i);
		if(!record.get(ch)) cNum++;

		record.set(ch, (record.get(ch) || 0) + 1);
	}

	for(var left = 0, right = 0, c = 0; right < s.length; right++) {
		var ch = s.charAt(right);
		var val = record.get(ch) || 0;

		if(val === 1) c++;
		record.set(ch, --val);

		while(record.get(s[left]) < 0) {
			record.set(s[left], record.get(s[left]) + 1);
			left++;
		}

		if(c === cNum && right - left + 1 < length) {
			ans = s.substr(left, right-left+1);
			length = right - left + 1;
		}
	}

	return ans;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));