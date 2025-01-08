import { ListNode } from "./9.合并两个有序链表"

/**
 * 力扣：https://leetcode.cn/problems/linked-list-cycle/description/
 * 思路：双指针，有一个快指针 和 慢指针，慢指针每次走一步，快指针每次走两步，如有环，快慢指针会 相遇
 */
function hasCycle(head: ListNode | null): boolean {
    let set = new Set()
    while (head) {
        if (set.has(head)) {
            return true
        }
        set.add(head)
        head = head.next
    }
    return false
};
let set = new Set()
let nodepp = new ListNode()
set.add(nodepp)
console.log(set.has(nodepp));

