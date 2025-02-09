/**
 * 力扣: https://leetcode.cn/problems/palindromic-substrings/description/
 */
function countSubstrings(s: string): number {
    let win = 1;
    let arr = [];
    function check(str: string) {
        let left = 0;
        let right = str.length - 1;
        while (right > left) {
            if (str[left] === str[right]) {
                left++;
                right--;
            } else return false;
        }
        return true;
    }
    while (win <= s.length) {
        let left = 0,
            right = win - 1;
        for (let index = 0; index < s.length; index++) {
            const element = s.slice(left, right + 1);
            if (check(element)) {
                arr.push(element);
            }
            left++;
            right++;
            if (right==s.length) break
        }
        win++;
    }
    return arr.length;
}

console.log(countSubstrings("aaa"));
