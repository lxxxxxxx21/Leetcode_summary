// 题目来源：https://leetcode-cn.com/problems/odd-even-linked-list/

var oddEvenList = function(head) {
    if(head === null || head.next === null || head.next.next === null) return head;

    var odd = head;
    var even = head.next;
    var evenHead = even;
    

    while(even !== null && even.next !== null) {
        odd.next = even.next;
        even.next = odd.next.next;
        odd.next.next = even;

        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;

    return head;
};