/**
 * 力扣: https://leetcode.cn/problems/maximum-subarray/description/
 */

function maxSubArray(nums: number[]): number {
    let maxSum = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(sum, maxSum);
        console.log(maxSum);
        if (sum < 0) sum = 0;
    }

    return maxSum;
}
console.log(maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
