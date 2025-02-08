/**
 * 力扣: https://leetcode.cn/problems/climbing-stairs/description/
 */
function climbStairs(n: number): number {
    if (n == 1) {
        return 1;
    }
    let first = 1;
    let second = 2;
    for (let index = 3; index < n + 1; index++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}

console.log(climbStairs(60));
