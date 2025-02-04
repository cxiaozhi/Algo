/**
 * 力扣：https://leetcode.cn/problems/string-to-integer-atoi/description/
 */
function myAtoi(s: string): number {
    s = s.trim();
    let isPM = true;
    let nums = [];
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (/[a-zA-Z]/.test(element)) {
            break;
        } else if (element == "-") {
            if (nums.length > 0) {
                break;
            }
            isPM = false;
            nums.push("0");
        } else if (element == "+") {
            if (nums.length > 0) {
                break;
            }
            isPM = true;
            nums.push("0");
        } else if (/[0-9]/.test(element)) {
            nums.push(element);
        } else {
            break;
        }
    }
    let num = Number(nums.join(""));
    if (num == 0) return 0;
    if (!isPM) {
        if (num >= 2 ** 31) {
            num = 2 ** 31;
        }
        return -num;
    }else{
        if (num >= 2 ** 31 - 1) {
            num = 2 ** 31 - 1;
        }
    }
    return num;
}

console.log(myAtoi("21474836460"));
