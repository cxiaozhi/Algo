/**
 * 力扣: https://leetcode.cn/problems/min-cost-climbing-stairs/description/
 */
function minCostClimbingStairs(cost: number[]): number {
    let len = cost.length;
    const dp: number[] = new Array(len);
    dp[len - 1] = cost[len - 1];
    dp[len - 2] = cost[len - 2];
    for (let i = len - 3; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
    }
    return Math.min(dp[0], dp[1]);
}
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,100,1,1]));
