/**
 * 力扣：https://leetcode.cn/problems/longest-common-prefix/description/
 */
function longestCommonPrefix(strs: string[]): string {
    let i = 0;
    const minL = Math.min(...strs.map((str) => str.length));
    for (i = 0; i < minL; i++) {
        if (strs.some((str) => str[i] !== strs[0][i])) return strs[0].substring(0, i);
    }
    return strs[0].substring(0, minL);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
