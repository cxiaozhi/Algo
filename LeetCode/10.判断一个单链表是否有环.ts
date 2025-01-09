import { ListNode } from "./9.合并两个有序链表"

/**
 * 力扣：https://leetcode.cn/problems/linked-list-cycle/description/
 * 思路：访问过的放入集合，然后循环的时候检测是否存在
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

