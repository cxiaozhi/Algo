class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * 力扣：https://leetcode.cn/problems/merge-two-sorted-lists/description/
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) {
        return list2
    }else if (list2 == null) {
        return list1
    }else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next,list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1,list2.next)
        return list2
    }
}
let node3 = new ListNode(3);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

let lnode3 = new ListNode(4);
let lnode2 = new ListNode(3, lnode3);
let lnode1 = new ListNode(1, lnode2);

let node = mergeTwoLists(node1, lnode1)
while (node) {
    console.log(node.val);
    node = node.next
}
