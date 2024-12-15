/**
 * 桶排序
 */
class BucketSort {
    constructor(parameters) {}
    bucketSort(nums: number[]): void {
        const k = nums.length / 2;
        const buckets: number[][] = [];
        for (let i = 0; i < k; i++) {
            buckets.push([]);
        }

        for (const num of nums) {
            const i = Math.floor(num * k);
            buckets[i].push(num);
        }

        for (const bucket of buckets) {
            bucket.sort((a, b) => a - b);
        }

        // 遍历桶合并结果
        let i = 0;
        for (const bucket of buckets) {
            for (const num of bucket) nums[i++] = num;
        }
    }
}
