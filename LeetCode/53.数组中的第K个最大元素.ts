/**
 * 力扣: https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 */
function findKthLargest(nums: number[], k: number): number {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}
