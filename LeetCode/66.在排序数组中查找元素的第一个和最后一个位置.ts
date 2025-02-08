/**
 * 力扣: https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */
function searchRange(nums: number[], target: number): number[] {
    let result = [];
    let fail = [-1, -1];
    function ba(left: number, right: number) {
        if (left > right) return;
        console.log(left, right);

        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            ba(mid + 1, right);
        }
        if (nums[mid] > target) {
            ba(left, mid - 1);
        }
        if (nums[mid] == target) {
            result.unshift(mid);
        }
    }
    ba(0, nums.length - 1);
    let mid = result[0];
    let left = mid;
    let right = mid;
    while (true) {
        left--;
        right++;
        if (nums[left] !== target && nums[right] !== target) break;
        if (nums[left] == target) {
            result.unshift(left);
        }
        if (nums[right] == target) {
            result.push(right);
        }
    }
    if (result.length == 1) {
        result.unshift(result[0]);
    }
    if (result.length > 2) {
        result = [result[0], result[result.length - 1]];
    }
    return result.length ? result : fail;
}

console.log(searchRange([2, 2], 2));
