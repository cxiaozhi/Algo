/**
 * 力扣: https://leetcode.cn/problems/koko-eating-bananas/description/
 */
function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let totalHours = 0;
        for (let pile of piles) {
            totalHours += Math.ceil(pile / mid);
        }
        if (totalHours > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
