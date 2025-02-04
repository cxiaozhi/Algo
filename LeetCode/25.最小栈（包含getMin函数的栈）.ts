/**
 * 力扣：https://leetcode.cn/problems/min-stack/description/
 */
class MinStack {
    private stack = [];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        let min = this.stack[0];
        for (let index = 0; index < this.stack.length; index++) {
            const element = this.stack[index];
            if (element < min) min = element;
        }
        return min;
    }
}

class MinStack1 {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        // 维护辅助栈，确保它的栈顶是当前最小值
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    // 删除顶部
    pop(): void {
        if (this.stack.length === 0) return;
        const popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    // 获取顶部
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

let obj = new MinStack1()
obj.push(2)
obj.push(1)
obj.push(3)
obj.pop()
console.log(obj.getMin());


