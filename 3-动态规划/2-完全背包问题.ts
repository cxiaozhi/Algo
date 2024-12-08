/**
给定 n 个物品，第i个物品的重量为wgt[i-1] 、价值为val[i-1],和一个容量为cap的背包。每个物品可以重复选取，问在限定背包容量下能放入物品的最大价值?
*/
function unboundedKnapsackDP(wgt: Array<number>, val: Array<number>, cap: number): number {
    const n = wgt.length;
    // 初始化dp表
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: cap + 1 }, () => 0));
    // 状态转移
    for (let i = 1; i <= n; i++) {
        for (let c = 1; c <= cap; c++) {
            if (wgt[i - 1] > c) {
                dp[i][c] = dp[i - 1][c];
                console.log(dp);
            } else {
                let next = dp[i][c - wgt[i - 1]] + val[i - 1]
                dp[i][c] = Math.max(dp[i - 1][c], next);
                console.log(dp);
            }
        }
    }
    return dp[n][cap];
}

console.log(unboundedKnapsackDP([10, 20, 30, 40, 50], [50, 120, 150, 210, 240], 50));
