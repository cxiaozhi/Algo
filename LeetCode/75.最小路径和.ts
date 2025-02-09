/**
 * 力扣: https://leetcode.cn/problems/minimum-path-sum/description/
 */
function minPathSum(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let dp = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => 0));
    dp[0][0] = grid[0][0];
    for (let index = 1; index < cols; index++) {
        dp[0][index] = dp[0][index - 1] + grid[0][index];
    }
    for (let index = 1; index < rows; index++) {
        dp[index][0] = dp[index - 1][0] + grid[index][0];
    }
    for (let index = 1; index < rows; index++) {
        for (let j = 1; j < cols; j++) {
            dp[index][j] = Math.min(dp[index - 1][j], dp[index][j - 1]) + grid[index][j];
        }
    }
    return dp[rows - 1][cols - 1]
}

console.log(
    minPathSum([
        [1, 2, 3],
        [4, 5, 6],
    ])
);
