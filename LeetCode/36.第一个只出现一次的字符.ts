/**
 * 力扣：https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/description/
 */
function dismantlingAction(arr: string): string {
    let map = new Map();
    for (const char of arr) map.set(char, (map.get(char) ?? 0) + 1);
    for (const [key, val] of map) if (val == 1) return key;
    return " ";
}

console.log(dismantlingAction("loveleetcode"));
