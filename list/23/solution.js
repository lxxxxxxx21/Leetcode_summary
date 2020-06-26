var mergeKLists = function(lists) {
    var k = lists.length;

    var dummy = new ListNode(-1);
    var tail = dummy;

    while(1) {

        var minNode = null;
        var minIndex = -1;
        for(var i = 0; i < k; i++) {
            if(lists[i] === null) continue;

            if(minNode === null || minNode.val > lists[i].val) {
                minNode = lists[i];
                minIndex = i;
            }
        }

        if(minIndex === -1) break;

        tail.next = minNode;
        tail = tail.next;
        lists[minIndex] = lists[minIndex].next;
    }

    return dummy.next;
};