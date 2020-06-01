// 题目来源：https://leetcode-cn.com/problems/implement-trie-prefix-tree/

// 以下是前缀树结点的结构代码
var TrieNode = function() {
    this.isEnd = -1;
    this.R = 26;
    this.links = new Array(this.R).fill(null);
};

TrieNode.prototype.put = function(ch, node) {
    var diff = new String(ch).charCodeAt(0) - 97;
    this.links[diff] = node;
}

TrieNode.prototype.get = function(ch) {
    return this.links[new String(ch).charCodeAt(0) - 97];
}

var Trie = function() {
    this.root = new TrieNode();
}


// 以下是前缀树的结构代码

Trie.prototype.insert = function(word) {
    var n = word.length;
    var node = this.root;
    for(var i = 0; i < n; i++) {
        var ch = word.charAt(i);
        var diff = new String(ch).charCodeAt(0) - 97;
        if(!node.links[diff]) {
            node.put(ch, new TrieNode());
        }

        node = node.get(ch);
    }

    node.isEnd = 1;
};

Trie.prototype.search = function(word) {
    var n = word.length;
    var node = this.root;

    for(var i = 0; i < n; i++) {
        var ch = word.charAt(i);
        var diff = new String(ch).charCodeAt(0) - 97;
        if(node.links[diff] != null) {
            node = node.get(ch);
        } else {
            return false;
        }
    }
    if(node && node.isEnd === 1) return true;
    else return false;
};

Trie.prototype.startsWith = function(prefix) {
    var n = prefix.length;
    var node = this.root;

    for(var i = 0; i < n; i++) {
        var ch = prefix.charAt(i);
        var diff = new String(ch).charCodeAt(0) - 97
        if(node.links[diff] != null) {
            node = node.get(ch);
        } else {
            return false;
        }
    }

    if(node !== null) return true;
};