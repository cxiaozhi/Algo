import { Head } from "../5-搜索/4-TOP-K问题";

/**
 * 堆排序
 */
class HeadSort {
    constructor(parameters) {}
    siftDown(nums: number[], n: number, i: number): void {
        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let ma = i;
            if (l < n && nums[l] > nums[ma]) {
                ma = l;
            }
            if (r < n && nums[r] > nums[ma]) {
                ma = r;
            }
            if (ma === i) {
                break;
            }
            [nums[i], nums[ma]] = [nums[ma], nums[i]];
            i = ma;
        }
    }

    heapSort(nums: number[]): void {
        for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
            this.siftDown(nums, nums.length, i);
        }

        for (let i = nums.length - 1; i > 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];
            this.siftDown(nums, i, 0);
        }
    }
}
