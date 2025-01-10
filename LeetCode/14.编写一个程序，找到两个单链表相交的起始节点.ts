import { ListNode } from "./9.合并两个有序链表";

/**
 * 力扣：https://leetcode.cn/problems/intersection-of-two-linked-lists/description/
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let temp1 = []
    let temp2 = []
    while (headA) {
        temp1.push(headA)
        headA = headA.next
    }

    while (headB) {
        temp2.push(headB)
        headB = headB.next
    }
    
    for (let index = 0; index < temp1.length; index++) {
        const item = temp1[index];
        if (temp2.includes(item)) {
            return item
        }
        
    }
    return null
};