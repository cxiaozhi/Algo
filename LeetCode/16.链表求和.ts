import { ListNode } from "./9.合并两个有序链表";

/**
 * 力扣：https://leetcode.cn/problems/sum-lists-lcci/description/
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let int = 0;
    let a = l1.val ? l1.val : 0;
    let b = l2.val ? l2.val : 0;
    let num = a + b + int;
    int = Math.floor(num / 10);
    let val = num % 10;
    let head = new ListNode(val);
    let temp = head;
    l1 = l1.next;
    l2 = l2.next;
    while (l1 || l2 || int) {
        a = l1 ? (l1.val ? l1.val : 0) : 0;
        b = l2 ? (l2.val ? l2.val : 0) : 0;
        num = a + b + int;
        int = Math.floor(num / 10);
        val = num % 10;
        let next = new ListNode(val);
        temp.next = next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        temp = next;
    }
    return head;
}
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
