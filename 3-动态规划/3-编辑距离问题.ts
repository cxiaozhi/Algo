/**
输入两个字符串s和t，返回将s转换为t所需的最少编辑步数。你可以在一个字符串中进行三种编辑操作：插入一个字符、删除一个字符、将字符替换为任意一个字符。

动态规划需要记录每轮的决策
*/
function editDistanceDP(s: string, t: string): number {
    const n = s.length,
        m = s.length;
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s.charAt(i - 1) === t.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            }
            console.log(dp[i][j]);
        }
    }

    return dp[n][m];
}

console.log(editDistanceDP("aa","bcc"));

