import { ListNode } from "./9.合并两个有序链表";

/**
 * 力扣: https://leetcode.cn/problems/sort-list/description/
 */
function sortList(head: ListNode | null): ListNode | null {
    if (!head) return head;
    let arr = [];
    let start = head;
    while (start) {
        arr.push([start.val, start]);
        start = start.next;
    }
    arr.sort((a, b) => a[0] - b[0]);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const next = arr[index + 1];
        if (next) {
            element[1].next = next[1];
        } else {
            element[1].next = null;
        }
    }
    return arr[0][1];
}
