/**
 * 基数排序
 */
class RadixSort {
    constructor(parameters) {}

    digit(num: number, exp: number) {
        return Math.floor(num / exp) % 10;
    }

    // 计数排序
    countingSortDigit(nums: number[], exp: number): void {
        const counter = new Array(10).fill(0);
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            const d = this.digit(nums[i], exp);
            counter[d]++;
        }

        for (let i = 0; i < 10; i++) {
            counter[i] += counter[i - 1];
        }

        const res = new Array(n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            const d = this.digit(nums[i], exp);
            const j = counter[d] - 1;
            res[j] = nums[i];
            counter[d]--;
        }

        for (let i = 0; i < n; i++) {
            nums[i] = res[i];
        }
    }

    radixSort(nums: number[]): void {
        let m = Number.MIN_VALUE;
        for (const num of nums) {
            if (num > m) {
                m = num;
            }
        }

        for (let exp = 1; exp <= m; exp *= 10) {
            this.countingSortDigit(nums, exp);
        }
    }
}
