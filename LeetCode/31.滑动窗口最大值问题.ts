/**
 * 力扣：https://leetcode.cn/problems/sliding-window-maximum/description/
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const q = [];
    for (let i = 0; i < k; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }
    
    const ans = [nums[q[0]]];
    for (let i = k; i < n; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        while (q[0] <= i - k) {
            q.shift();
        }
        ans.push(nums[q[0]]);
    }
    return ans;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1));
