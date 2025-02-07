/**
 * 力扣: https://leetcode.cn/problems/find-median-from-data-stream/description/
 */
class MedianFinder {
    /** 最大堆 */
    private left: number[] = [];
    /** 最小堆 */
    private right: number[] = [];
    constructor() {}

    addNum(num: number): void {
        // 先将元素插入最大值
        this.maxHeapInsert(num);
        // 平衡堆 确保两个堆大小差不超过1
        this.balanceHeaps();
    }

    findMedian(): number {
        if (this.left.length === this.right.length) {
            return (this.left[0] + this.right[0]) / 2;
        } else {
            return this.left[0];
        }
    }
    maxHeapInsert(num: number) {
        this.left.push(num);
        this.siftUpMax(this.left.length - 1, this.left);
        // 将最大堆的堆顶移动到最小堆
        this.right.push(this.left[0]);
        this.siftUpMin(this.right.length - 1, this.right);
        this.left[0] = this.left[this.left.length - 1];
        this.left.pop();
        this.siftDownMax(0, this.left);
    }

    // 平衡两个堆大小
    balanceHeaps() {
        if (this.right.length > this.left.length) {
            this.left.push(this.right[0]);
            this.siftUpMax(this.left.length - 1, this.left);
            this.right[0] = this.right[this.right.length - 1];
            this.right.pop();
            this.siftDownMin(0, this.right);
        }
    }

    /**  最大堆上浮调整*/
    private siftUpMax(index: number, heap: number[]) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (heap[parent] >= heap[index]) break;
            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
        }
    }

    /** 最大堆下沉调整*/
    private siftDownMax(index:number,heap:number[]) {
        const length = heap.length
        while (true) {
            let left = 2 * index + 1
            let right = 2 * index + 2
            let largest = index
            if (left < length && heap[left] > heap[largest]) largest = left
            if (right < length && heap[right] > heap[largest]) largest = right
            if (largest === index) break
            [heap[index],heap[largest]] = [heap[largest],heap[index]]
            index = largest
        }
    }
    
    /**
     * 最小堆上浮
     */
    private siftUpMin(index:number,heap:number[]) {
        while (index > 0) {
            const parent = Math.floor((index - 1)/2)
            if (heap[parent] <= heap[index]) break
            [heap[parent],heap[index]] = [heap[index],heap[parent]]
            index = parent
        }
    }

    /**
     * 最小堆下沉
     */
    private siftDownMin(index:number,heap:number[]) {
        const length = heap.length
        while (true) {
            let left = 2 * index + 1
            let right = 2 * index + 2
            let smallest = index
            if (left < length && heap[left] < heap[smallest]) smallest = left
            if (right < length && heap[right] < heap[smallest]) smallest = right
            if (smallest === index) break
            [heap[index],heap[smallest]] = [heap[smallest],heap[index]]
            index = smallest
        }
    }
}

let aa = new MedianFinder();
aa.addNum(0);
aa.addNum(0);
console.log();
