/**
 * 力扣：https://leetcode.cn/problems/valid-triangle-number/description/
 */
function triangleNumber(nums: number[]): number {
    let count = 0;
    if (nums.length < 3) {
        return count;
    }
    nums.sort((a, b) => a - b);
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let left = j + 1,
                right = len - 1,
                k = j;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] < nums[i] + nums[j]) {
                    k = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            count += k - j;
        }
    }
    return count;
}
let al15nums = [
    4, 99, 75, 97, 94, 93, 58, 13, 2, 5, 42, 23, 10, 94, 83, 49, 96, 24, 35, 0, 4, 98, 36, 14, 17, 100, 92, 85, 13, 12, 57, 67, 77, 51, 17, 72, 39, 31, 35, 5, 37, 56, 72, 13, 60, 0, 90, 3, 10, 38, 53,
    84, 19, 36, 68, 9, 96, 64, 50, 93, 43, 3, 67, 14, 9, 97, 93, 55, 66, 31, 96, 41, 32, 53, 76, 93, 1, 60, 80, 58, 9, 70, 54, 74, 84, 52, 95, 91, 56, 83, 15, 40, 36, 6, 95, 85, 72, 44, 85, 19,
];

console.log(triangleNumber(al15nums));
