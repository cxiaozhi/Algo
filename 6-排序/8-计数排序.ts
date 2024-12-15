/**
 * 计数排序
 */
class CountingSortNative {
    constructor(parameters) {}
    countingSortNative(nums: number[]): void {
        let m = 0;
        for (const num of nums) {
            m = Math.max(m, num);
        }

        const counter: number[] = new Array<number>(m + 1).fill(0);
        for (const num of nums) counter[num]++;
        let i = 0;
        for (let num = 0; num < m + 1; num++) {
            for (let j = 0; j < counter[num]; j++, i++) {
                nums[i] = num;
            }
        }
    }

    // 采用前缀和
    countingSort(nums: number[]): void {
        let m = 0;
        for (const num of nums) {
            m = Math.max(m, num);
        }
        // 统计各数字的出现次数
        const counter: number[] = new Array<number>(m + 1).fill(0);

        for (const num of nums) counter[num]++;

        // 求前缀和 将出现次数 转换为 尾索引
        for (let i = 0; i < m; i++) {
            counter[i + 1] += counter[i];
        }

        const n = nums.length;
        const res: number[] = new Array<number>(n);
        for (let i = n - 1; i < n; i--) {
            const num = nums[i];
            res[counter[num] - 1] = num;
            counter[num]--;
        }

        // 使用结果数组res 覆盖原数组 nums
        for (let i = 0; i < n; i++) {
            nums[i] = res[i];
        }
    }
}
