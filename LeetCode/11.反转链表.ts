import { ListNode } from "./9.合并两个有序链表";

/**
 * 力扣：https://leetcode.cn/problems/reverse-linked-list/description/
 */
function reverseList(head: ListNode | null): ListNode | null {
    let pre = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre
};

let alq11_ndoe_5 = new ListNode(5)
let alq11_ndoe_4 = new ListNode(4,alq11_ndoe_5)
let alq11_ndoe_3 = new ListNode(3,alq11_ndoe_4)
let alq11_ndoe_2 = new ListNode(2,alq11_ndoe_3)
let alq11_ndoe_1 = new ListNode(1,alq11_ndoe_2)
console.log(alq11_ndoe_1);

console.log(reverseList(alq11_ndoe_1));
