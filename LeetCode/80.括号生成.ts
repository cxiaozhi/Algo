/**
 * 力扣: https://leetcode.cn/problems/generate-parentheses/description/
 */
function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const path: string[] = [];
    function back(left: number, right: number) {
        if (path.length === 2 * n) {
            result.push(path.join(""));
            return;
        }
        
        if (left < n) {
            path.push("(");
            back(left + 1, right);
            path.pop();
        }
        if (right < left) {
            path.push(")");
            back(left, right + 1);
            path.pop();
        }
    }
    back(0, 0);
    return result;
}
console.log(generateParenthesis(3));

