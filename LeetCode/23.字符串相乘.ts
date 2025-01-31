/**
 * 力扣：https://leetcode.cn/problems/multiply-strings/description/
 * 结果的长度不会超过两个数长度之和，最后删除前边为0的字符串
 */
function multiply(num1: string, num2: string): string {
    if (Number(num1) == 0 || Number(num2) == 0) return "0";
    const m = num1.length,
        n = num2.length;
    const ans = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const multi = +num1[i] * +num2[j];
            const p1 = i + j,
                p2 = i + j + 1;
            const sum = multi + ans[p2];
            ans[p2] = sum % 10;
            ans[p1] += Math.floor(sum / 10);
        }
    }
    while(ans[0] == "0"){
        ans.shift()
    }
    return ans.join("")
}

console.log(multiply("2", "3"));
