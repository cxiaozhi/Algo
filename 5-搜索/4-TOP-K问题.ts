// 堆是一种满足特定条件的完全二叉树，小顶堆和大顶堆
// 优先队列和堆看作等价的数据结构 对值进行取反 大小顶堆可以互换直接使用
export class Head {
    maxHeap: number[];
    constructor(nums: number[]) {
        this.maxHeap = nums === undefined ? [] : [...nums];
        for (let index = this.parent(this.size() - 1); index >= 0; index--) {
            this.siftDown(index);
        }
    }

    // 获取左子节点
    left(i: number): number {
        return 2 * i + 1;
    }

    // 获取右子节点
    right(i: number): number {
        return 2 * i + 2;
    }

    // 获取父节点索引
    parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    // 获取堆顶元素
    peek(): number {
        return this.maxHeap[0];
    }

    push(val: number) {
        this.maxHeap.push(val);
        this.siftUP(this.size() - 1);
    }

    size() {
        return this.maxHeap.length;
    }

    // 自底向上堆化
    siftUP(i: number): void {
        while (true) {
            const p = this.parent(i);
            if (p < 0 || this.maxHeap[i] <= this.maxHeap[p]) break;
            this.swap(i, p);
            i = p; // 向上循环
        }
    }

    swap(i: number, p: number) {
        let temp = this.maxHeap[i];
        this.maxHeap[i] = this.maxHeap[p];
        this.maxHeap[p] = temp;
    }

    // 元素出堆
    pop(): number {
        // 判空处理
        if (this.isEmpty()) throw new RangeError("Heap is empty");
        this.swap(0, this.size() - 1);
        const val = this.maxHeap.pop();
        this.siftDown(0);
        return val;
    }
    isEmpty(): boolean {
        return false;
    }

    // 从顶自底堆化
    siftDown(i: number): void {
        while (true) {
            const l = this.left(i),
                r = this.right(i);
            let ma = i;
            if (l < this.size() && this.maxHeap[l] > this.maxHeap[ma]) {
                ma = l;
            }
            if (r < this.size() && this.maxHeap[r] > this.maxHeap[ma]) {
                ma = r;
            }
            if (ma === i) {
                break;
            }

            this.swap(i, ma);
            i = ma;
        }
    }
}

/**
 * 给定一个长度为 n 的无序数组 nums ，请返回数组中最大的 k 个元素。
 */
// 元素入堆
function pushMinHeap(maxHeap: Head, val: number): void {
    // 元素取反
    maxHeap.push(-val);
}

// 元素出堆
function popMinHeap(maxHeap: Head): number {
    return -maxHeap.pop();
}

// 访问堆顶元素
function peekMinHeap(maxHeap: Head): number {
    return -maxHeap.peek();
}

// 取出堆中元素
function getMinHeap(maxHeap: Head): number[] {
    return maxHeap.maxHeap.map((num) => -num);
}

// 基于堆查找数组中最大的K个元素
function topKHeap(nums: number[], k: number): number[] {
    // 初始化小顶堆
    const maxHeap = new Head([]);
    for (let i = 0; i < k; i++) {
        pushMinHeap(maxHeap, nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > peekMinHeap(maxHeap)) {
            popMinHeap(maxHeap);
            pushMinHeap(maxHeap, nums[i]);
        }
    }

    return getMinHeap(maxHeap);
}
