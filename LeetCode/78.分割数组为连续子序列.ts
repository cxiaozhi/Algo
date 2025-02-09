/**
 * 力扣: https://leetcode.cn/problems/split-array-into-consecutive-subsequences/description/
 */
function isPossible(nums: number[]): boolean {
    const countMap = new Map();
    const endMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    for (const num of nums) {
        if (countMap.get(num) === 0) {
            continue;
        }
        console.log(num);
        if (endMap.get(num - 1) > 0) {
            endMap.set(num - 1, endMap.get(num - 1) - 1);
            endMap.set(num, (endMap.get(num) || 0) + 1);
        } else if (countMap.get(num + 1) > 0 && countMap.get(num + 2) > 0) {
            countMap.set(num + 1, countMap.get(num + 1) - 1);
            countMap.set(num + 2, countMap.get(num + 2) - 1);
            endMap.set(num + 2, (endMap.get(num + 2) || 0) + 1);
        } else {
            return false;
        }
        countMap.set(num, countMap.get(num) - 1);
    }
    return true;
}

console.log(isPossible([1, 2, 3, 3, 4, 5]));
