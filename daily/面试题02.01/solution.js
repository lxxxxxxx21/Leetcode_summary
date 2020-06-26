var removeDuplicateNodes = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;

    var hashMap = new Map();

    var pre = head;
    var p = head.next;

    hashMap.set(pre.val, 1);
    while(p !== null) {
        if(hashMap.get(p.val)) {
            pre.next = p.next;
            p = pre.next;
        } else {
            hashMap.set(p.val, 1);
            pre = p;
            p = p.next;
        }
    }

    return head;
};