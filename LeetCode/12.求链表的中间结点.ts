import { ListNode } from "./9.合并两个有序链表";

/**
 * 力扣：https://leetcode.cn/problems/middle-of-the-linked-list/description/
 */
function middleNode(head: ListNode | null): ListNode | null {
    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    return arr[Math.floor(arr.length/2)]
};