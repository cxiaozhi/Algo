/**
 * 力扣: https://leetcode.cn/problems/find-the-town-judge/description/
 */
function findJudge(n: number, trust: number[][]): number {
    if (trust.length == 0) {
        return n == 1 ? n : -1;
    }
    let map = new Map();
    let map2 = new Map();
    let arr = [];
    for (let index = 0; index < trust.length; index++) {
        const element = trust[index];
        map2.set(element[0], element[1]);
        map.set(element[1], (map.get(element[1]) ?? 0) + 1);
        if (!arr.includes(element[1])) {
            arr.push(element[1]);
        }
    }
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (map.get(element) == n - 1 && !map2.get(element)) {
            return element;
        }
    }
    return -1;
}
console.log(
    findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
    ])
);
