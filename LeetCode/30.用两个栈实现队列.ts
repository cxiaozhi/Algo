/**
 * 力扣：https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/description/
 */
class CQueue {
    private queue = []
    constructor() {
        this.queue = []
    }

    appendTail(value: number): void {
        this.queue.push(value)
    }

    deleteHead(): number {
        let head = this.queue.shift()
        return head ? head : -1
    }
}

let q = new CQueue()

console.log(q.deleteHead());
console.log(q.appendTail(5));
console.log(q.appendTail(2));
console.log(q.deleteHead());
console.log(q.deleteHead());
