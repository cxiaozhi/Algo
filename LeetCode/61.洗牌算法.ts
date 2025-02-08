/**
 * 力扣: https://leetcode.cn/problems/shuffle-an-array/description/
 */
class Solution {
    private nums: number[] = [];
    constructor(nums: number[]) {
        this.nums = nums;
    }
    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        let copy = [...this.nums];
        for (let index = copy.length - 1; index > 0; index--) {
            const random = Math.floor(Math.random() * (index + 1));
            [copy[index], copy[random]] = [copy[random], copy[index]];
        }
        return copy;
    }
}

let obj4 = new Solution([1, 2, 3]);
let arr11 = obj4.reset();
let arr12 = obj4.shuffle();
console.log(arr12);
