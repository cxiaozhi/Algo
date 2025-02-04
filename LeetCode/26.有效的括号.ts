/**
 * 力扣：https://leetcode.cn/problems/valid-parentheses/description/
 */
function isValid(s: string): boolean {
    let arr = [];
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (element == "(" || element == "{" || element == "[") {
            arr.push(element);
        } else if (element == ")") {
            let str = arr.pop();
            if (str !== "(") {
                return false;
            }
        } else if (element == "}") {
            let str = arr.pop();
            if (str !== "{") {
                return false;
            }
        } else if (element == "]") {
            let str = arr.pop();
            if (str !== "[") {
                return false;
            }
        }
    }
    if (arr.length > 0) return false;
    return true;
}

console.log(isValid("[(])"));
