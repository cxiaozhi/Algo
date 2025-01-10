import { ListNode } from "./9.合并两个有序链表";

/**
 * 力扣：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;
    let arr: ListNode[] = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    if (n > arr.length) {
        return null
    }
    arr.splice(arr.length - n, 1);
    if (arr.length > 0) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            const next = arr[index + 1]
            if (next) {
                element.next = next
            }else{
                element.next = null
            }
        }
        
    }else{
        return null
    }

    return arr[0];
}

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
    let dummy:ListNode = new ListNode(0,head)
    let first:ListNode = head
    let second:ListNode = dummy
    for (let index = 0; index < n; index++) {
        first = first.next
    }

    while (first) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return  dummy.next
}