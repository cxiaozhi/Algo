/**
 * 力扣: https://leetcode.cn/problems/top-k-frequent-elements/description/
 */
function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    nums.map((num) => map.set(num, (map.get(num) ?? 0) + 1));
    let arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    let temp = [];
    arr.map((val, index) => {
        if (index < k) {
            temp.push(val[0]);
        }
    });
    return temp;
}
