// 题目来源：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(-1);
    dummy.next = head;
    var first = dummy;
    var second = dummy;

    for(var i = 1; i <= n+1; i++) {
        first = first.next;
    }

    while(first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
};